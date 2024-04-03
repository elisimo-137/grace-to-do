import { useState } from "react";
import { ShowTodos } from "./ShowTodos";
import { AddTodo } from "./AddTodo";
export default function App() {
  const [todos, setTodos] = useState([]);
  function onAddTodo(title) {
    console.log(title);
    const novSeznam = [...todos, title];

    setTodos(novSeznam);
  }
  return (
    <div className="container">
      <AddTodo onAddTodo={onAddTodo}></AddTodo>
      <ShowTodos todos={todos}></ShowTodos>
    </div>
  );
}
