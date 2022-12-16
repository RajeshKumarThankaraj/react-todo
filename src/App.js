import React, { useState } from "react";

import "./App.css";

import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
      id: "001",
      text: "This is my first Todo",
    },
    {
      id: "002",
      text: "This is my second Todo",
    },
  ]);

  const addTodoHandler = (text) => {
    const randomNo = Math.random() * 1000;
    setTodo([...todo, { id: randomNo, text: text }]);
  };

  const removeTodoHandler = (id) => {
    const removeTodo = todo.filter((i) => i.id !== id);
    setTodo(removeTodo);
  };

  const editTodoHandler = (id, text) => {
    setInput(text);
    const inputBox = document.getElementById("input-box");
    inputBox.focus();
    removeTodoHandler(id);
  };

  return (
    <div className="container vh-100 d-flex align-items-center justify-content-center">
      <div className="container-box ">
        <AddTodo
          addTodoHandler={addTodoHandler}
          input={input}
          setInput={setInput}
        />
        <TodoList
          todo={todo}
          removeTodoHandler={removeTodoHandler}
          editTodoHandler={editTodoHandler}
        />
      </div>
    </div>
  );
}

export default App;
