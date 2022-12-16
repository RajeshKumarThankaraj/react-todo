import React from "react";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const TodoList = (props) => {
  const markCompleteHandler = (id) => {
    const text = document.getElementById(id);
    text.classList.toggle("text-decoration-line-through");
  };
  const editHandler = (id, text) => {
    props.editTodoHandler(id, text);
  };

  const deleeteHandler = (id) => {
    props.removeTodoHandler(id);
  };

  return (
    <div>
      <h1 className="text-center m-5">Todo Lists</h1>
      <ul className="todo-list d-flex flex-column">
        {props.todo.map((t) => (
          <div className="w-100 border mb-3 p-1 d-flex flex-row justify-content-between">
            <div className="d-flex justify-content-start">
              <div className="me-3">
                <CheckCircleOutlineIcon
                  onClick={() => markCompleteHandler(t.id)}
                />
              </div>
              <li key={t.id} className="me-3" id={t.id}>
                {t.text}
              </li>
            </div>
            <div>
              <EditIcon
                className="me-3"
                onClick={() => editHandler(t.id, t.text)}
              />
              <DeleteForeverIcon
                className="me-3"
                onClick={() => deleeteHandler(t.id)}
              />
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
