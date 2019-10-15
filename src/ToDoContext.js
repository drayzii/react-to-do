import React, { useState, createContext } from "react";
import axios from "axios";

export const ToDoContext = createContext();

export const ToDoProvider = props => {
  const [todos, setTodos] = useState([]);
  axios
    .get("http://localhost:5000/todos/view/all/")
    .then(response => {
      setTodos(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  return (
    <ToDoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
