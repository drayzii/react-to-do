import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ToDoProvider } from "./ToDoContext";
import "./App.css";

import Header from "./components/Header";
import CompletedToDoList from "./components/CompletedToDoList";
import UnCompletedToDoList from "./components/UnCompletedToDoList";
import ToDoList from "./components/ToDoList";
import AddToDo from "./components/AddToDo";

function App() {
  return (
    <ToDoProvider>
      <Router>
        <Header />
        <Route path="/" exact component={ToDoList} />
        <Route path="/pending" exact component={UnCompletedToDoList} />
        <Route path="/done" exact component={CompletedToDoList} />
        <Route path="/add" exact component={AddToDo} />
      </Router>
    </ToDoProvider>
  );
}

export default App;
