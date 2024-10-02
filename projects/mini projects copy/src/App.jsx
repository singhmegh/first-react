import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/Welcomemsg";
import { TodoItemsContext } from "./Store/todo-items-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,            //spread operator without this array ke andar array ban jata hai
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handledeleteitem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider>
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo onNewItem={handleNewItem}></AppTodo>
     <WelcomeMessage todoItems={todoItems}></WelcomeMessage>
      <TodoItems
        todoItem={todoItems}
        onDeleteClick={handledeleteitem}
      ></TodoItems>
    </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
