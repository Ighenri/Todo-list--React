import React from "react";

export const Todos = ({ todos, deleteTodo }) => {
  const todoLists = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            {" "}
            {todo.content}{" "}
          </span>
        </div>
      );
    })
  ) : (
    <p className="center">There is no todo yet</p>
  );

  return <div className="todo collection">{todoLists}</div>;
};
