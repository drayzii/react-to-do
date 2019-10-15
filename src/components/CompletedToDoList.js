import React, { useContext } from "react";
import ToDo from "./CompletedToDo";
import queryString from "query-string";
import { ToDoContext } from "../ToDoContext";

const ToDoList = props => {
  const [todos, setTodos] = useContext(ToDoContext);
  const values = queryString.parse(props.location.search);
  let message = "";
  let noToDosC = "";
  const todosCompleted = todos.filter(el => el.completed === true);
  if (todosCompleted.length === 0) {
    noToDosC = <p>Could not show tasks</p>;
  }
  if (values.status === "deleted") {
    message = <p>Successfully deleted task!</p>;
  } else if (values.status === "delete_failed") {
    message = <p>Could not delete task!</p>;
  }
  return (
    <div className="todos">
      {message}
      <h1>Done Tasks</h1>
      {noToDosC}
      {todosCompleted.map(todo => (
        <ToDo todoInfo={todo} url={props.location.pathname} />
      ))}
    </div>
  );
};

export default ToDoList;
