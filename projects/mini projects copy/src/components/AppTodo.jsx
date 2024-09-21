function AppTodo ({onNewItem}){
return <div className="row my-row">
<div className="col-6">
  <input type ="text" placeholder = "Enter Todo here" />
</div>
<div className="col-4">
  <input type = "date" />
</div>
<div className ="col-2">
<button type="button" className="btn btn-success my-button" onClick={() => onNewItem("a" ,"b")}>Add</button>
</div>
</div>
}
export default AppTodo;