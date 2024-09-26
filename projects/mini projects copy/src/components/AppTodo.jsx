import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";

function AppTodo({ onNewItem }) {
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value ="";
    dueDateElement.current.value ="";
    onNewItem(todoName, dueDate);
  };
  return (
    <form className="row my-row">
      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder="Enter Todo here"
          
        />
      </div>
      <div className="col-4">
        <input type="date" 
        ref = {dueDateElement} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success my-button"
          onClick={handleAddButtonClicked}
        >
          <BiMessageAdd />
        </button>
      </div>
    </form>
  );
}
export default AppTodo;
