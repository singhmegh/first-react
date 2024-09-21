import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const initialTodoItem = [
    {
      name: "Buyy Milk",
      dueDate: "4/2/2024",
    },
    {
      name: "Go to College",
      dueDate: "4/2/2024",
    },
    {
      name : "Like this vedio",
      dueDate : "4/9/2024",
    }
  ];
const[todoItems,setTodoItems] = useState(initialTodoItem);

const handleNewItem = (itemName, itemDueDate) => {
  console.log(`NEW ITem added: ${itemName} date: ${itemDueDate}`)
}
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo onNewItem = {handleNewItem}></AppTodo>
      <TodoItems todoItem ={todoItems}></TodoItems>
    </center>
  );
}

export default App;
