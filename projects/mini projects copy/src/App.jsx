import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";

import "./App.css";
import TodoItems from "./components/TodoItems";

import WelcomeMessage from "./components/Welcomemsg";

import TodoItemsContextProvider from "./Store/todo-items-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName></AppName>
        <AppTodo></AppTodo>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContextProvider>
  );
}

export default App;
