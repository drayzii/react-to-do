import React, { useContext } from "react";
import ToDo from "./UnCompletedToDo";
import queryString from "query-string";
import { ToDoContext } from "../ToDoContext";

const ToDoList = props => {
  const [todos, setTodos] = useContext(ToDoContext);
  const values = queryString.parse(props.location.search);
  let message = "";
  let noToDosU = "";
  const todosUnCompleted = todos.filter(el => el.completed === false);
  if (todosUnCompleted.length === 0) {
    noToDosU = <p>Could not show tasks</p>;
  }
  if (values.status === "setAsComplete") {
    message = <p>Successfully marked as complete!</p>;
  } else if (values.status === "setAsComplete_failed") {
    message = <p>Could not mark task as completed!</p>;
  } else if (values.status === "deleted") {
    message = <p>Successfully deleted task!</p>;
  } else if (values.status === "delete_failed") {
    message = <p>Could not delete task!</p>;
  }
  return (
    <div className="todos">
      {message}
      <h1>Pending Tasks</h1>
      {noToDosU}
      {todosUnCompleted.map(todo => (
        <ToDo todoInfo={todo} url={props.location.pathname} />
      ))}
    </div>
  );
};

export default ToDoList;
