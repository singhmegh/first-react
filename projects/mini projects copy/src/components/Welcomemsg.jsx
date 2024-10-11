import { TodoItemsContext } from "../Store/todo-items-store";
import styles from "./Welcomemsg.module.css";
import { useContext } from "react";


const WelcomeMessage = () => {
  const {todoItems} = useContext(TodoItemsContext);
 

  return (
    todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>
  );
};

export default WelcomeMessage;
