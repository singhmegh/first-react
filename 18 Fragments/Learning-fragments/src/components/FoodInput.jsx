import styles from "./FoodInput.module.css";

const Foodinput = () => {
const handleOnChange = (event) => {
    console.log(event.target.value)
}

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
