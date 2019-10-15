import React from "react";
import axios from "axios";

const ToDoList = props => {
  const deleteToDo = () => {
    axios
      .delete(`http://localhost:5000/todos/${props.todoInfo.id}/delete`)
      .then(() => {
        window.location = props.url + "?status=deleted";
      })
      .catch(() => {
        window.location = props.url + "?status=delete_failed";
      });
  };
  return (
    <div className="todo">
      <p>
        {props.todoInfo.name}
        <br />
        <button onClick={deleteToDo} className="btn btn-danger">
          Delete
        </button>
      </p>
    </div>
  );
};

export default ToDoList;
