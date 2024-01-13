import React, { useState } from "react";

export const AddTodo = (props) => {
  const [newTodo, setnewTodo] = useState("");

  const newTodoHandle = (e) => {
    const content = e.target.value;
    setnewTodo(content);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    props.addTodo(newTodo);
    setnewTodo("");
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label>Add new Todo:</label>
        <input type="text" onChange={newTodoHandle} value={newTodo} />
      </form>
    </div>
  );
};
