import React, { useState } from "react";
import axios from "axios";
import queryString from "query-string";

const AddTodo = props => {
  const [name, setName] = useState("");
  const values = queryString.parse(props.location.search);
  let message = "";
  if (values.status === "success") {
    message = <p>Successfully added task!</p>;
  } else if (values.status === "failed") {
    message = <p>Ooops! Could not add task!</p>;
  }

  const updateName = e => {
    setName(e.target.value);
  };

  const addToDo = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/todos/add/", {
        name
      })
      .then(() => {
        window.location = "/add?status=success";
      })
      .catch(() => {
        window.location = "/add?status=failed";
      });
  };
  return (
    <div className="todos">
      {message}
      <div className="todo">
        <h1>Add New Task</h1>
        <form onSubmit={addToDo}>
          <input
            type="text"
            className="newtask"
            name="name"
            placeholder="New Task"
            value={name}
            onChange={updateName}
          />
          &nbsp;
          <button className="btn btn-primary">Add Task</button>
        </form>
        <br />
      </div>
    </div>
  );
};

export default AddTodo;
