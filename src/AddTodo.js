import React, { useState } from "react";

export const AddTodo = (props) => {
  const [newTodo, setnewTodo] = useState("");

  const newTodoHandle = (e) => {
    const content = e.target.value;
    setnewTodo({
      content,
    });
    console.log(newTodo);
  };

  const submitHandle = (e) => {
    e.preventDefault();
    props.addTodo(newTodo);
  };
  return (
    <div>
      <form onSubmit={submitHandle}>
        <label>Add new Todo:</label>
        <input type="text" onChange={newTodoHandle} />
      </form>
    </div>
  );
};
