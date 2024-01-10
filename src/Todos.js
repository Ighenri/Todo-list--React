import React from "react";

export const Todos = ({ todos, deleteTodo }) => {
  return (
    <div>
      <div className="todo collection">
        {todos.length ? (
          todos.map((todo) => (
            <div className="collection-item" key={todo.id}>
              <span onClick={() => deleteTodo(todo.id)}> {todo.content} </span>
            </div>
          ))
        ) : (
          <p className="center">There is no todo yet</p>
        )}
      </div>
    </div>
  );
};
