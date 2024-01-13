import React, { useState } from "react";
import { Todos } from "./Todos";

const App = () => {
  const [todos, setTodo] = useState([
    {
      id: 1,
      content: "I will study react today",
    },

    {
      id: 2,
      content: " I will go to the market tomorrow",
    },

    {
      id: 3,
      content: "I will watch movies",
    },
  ]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodo(newTodos);

    // const newTodos = todos.filter((todo) => {
    //   return todo.id !== id;
    // });
    // setTodo({
    //   todos: newTodos,
    // });
  };

  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todos:</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
