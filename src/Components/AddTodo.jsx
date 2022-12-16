import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";

const AddTodo = (props) => {
  const inputHandler = (event) => {
    props.setInput(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.addTodoHandler(props.input);
    props.setInput("");
  };

  return (
    <form className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter your Todo"
        aria-label="Enter your Todo"
        aria-describedby="button-addon2"
        id="input-box"
        onChange={inputHandler}
        value={props.input}
      />
      <button
        className="btn btn-outline-secondary"
        type="submit"
        id="button-addon2"
        onClick={submitHandler}
      >
        <AddIcon />
      </button>
    </form>
  );
};

export default AddTodo;
