import { createContext } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},    /*empty method*/
  deleteItem: () => {},
});

//its for only autocomplete
