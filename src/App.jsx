import React from "react";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

const App = () => {
  return (
    <div className="min-h-screen">
      <AddTodo />
      <Todo />
    </div>
  );
};

export default App;
