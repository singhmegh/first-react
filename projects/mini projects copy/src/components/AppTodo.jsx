import { useState } from "react";

function AppTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="row my-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter Todo here"
          value = {todoName}      //value set the default value
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input type="date" 
        value={dueDate}
        onChange={handleDateChange} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success my-button"
          onClick={handleAddButtonClicked}
        >
          Add
        </button>
      </div>
    </div>
  );
}
export default AppTodo;
