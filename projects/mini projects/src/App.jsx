import AppName from "./components/AppName";
import AppTodo from "./components/AppTodo";
import TodoItem1 from "./components/TodoItem1";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center class="todo-container">
      <AppName></AppName>
      <AppTodo></AppTodo>
      <TodoItem1></TodoItem1>
      <TodoItem2></TodoItem2>
      
    </center>
  );
}

export default App;
