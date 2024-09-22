import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/Welcomemsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`NEW ITem added: ${itemName} date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handledeleteitem = (todoItemName) =>{
    const newTodoItems = todoItems.filter((item)=> item.name !== todoItemName);
    setTodoItems(newTodoItems);
    
  }
  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo onNewItem={handleNewItem}></AppTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItem={todoItems} onDeleteClick={handledeleteitem}></TodoItems>
    </center>
  );
}

export default App;
