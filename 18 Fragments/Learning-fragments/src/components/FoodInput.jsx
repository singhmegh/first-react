import styles from "./FoodInput.module.css";

const Foodinput = ({handleOnChange}) => {


  return (
    <input
      type="text"
      placeholder="Enter the food item hear"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default Foodinput;
