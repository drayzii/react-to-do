import React, { useContext } from "react";
import CompletedToDo from "./CompletedToDo";
import UncompletedToDo from "./UnCompletedToDo";
import queryString from "query-string";
import { ToDoContext } from "../ToDoContext";

const ToDoList = props => {
  const [todos, setTodos] = useContext(ToDoContext);
  const values = queryString.parse(props.location.search);
  let message = "";
  let noToDosC = "";
  let noToDosU = "";
  const todosCompleted = todos.filter(el => el.completed === true);
  const todosUnCompleted = todos.filter(el => el.completed === false);
  if (todosCompleted.length === 0) {
    noToDosC = <p>Could not show tasks</p>;
  }
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
        <UncompletedToDo todoInfo={todo} url={props.location.pathname} />
      ))}
      <h1>Done Tasks</h1>
      {noToDosC}
      {todosCompleted.map(todo => (
        <CompletedToDo todoInfo={todo} url={props.location.pathname} />
      ))}
    </div>
  );
};

export default ToDoList;
