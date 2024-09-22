import TodoItem from "./TodoItem ";
import style from "./todoItems.module.css";

const TodoItems = ({ todoItem, onDeleteClick }) => {
  return (
    <>
      <div className={style.itemsContainer}>
        {todoItem.map((item) => (
          <TodoItem
            todoDate={item.dueDate}
            todoName={item.name}
            onDeleteClick={onDeleteClick}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};

export default TodoItems;
