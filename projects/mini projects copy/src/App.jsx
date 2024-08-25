import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItem = [
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
      dueDate : "4/9/2024"
    }
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItems todoItem={todoItem}></TodoItems>
    </center>
  );
}

export default App;
