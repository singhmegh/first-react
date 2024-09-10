import styles from "./FoodInput.module.css";

const Foodinput = ({handlekeyDown}) => {


  return (
    <input
      type="text"
      placeholder="Enter the food item hear"
      className={styles.foodInput}
      onKeyDown={handlekeyDown }
    />
  );
};

export default Foodinput;
