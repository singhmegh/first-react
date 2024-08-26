import TodoItem from "./TodoItem ";
import style from "./todoItems.module.css";

const TodoItems = ({ todoItem }) => {
  
  return (
    <>
      <div className= {style.itemsContainer}>
        {todoItem.map((item)=>(
          <TodoItem todoDate={item.dueDate} todoName={item.name}></TodoItem>
        ))}
        
      </div>
    </>
  );
};

export default TodoItems;
