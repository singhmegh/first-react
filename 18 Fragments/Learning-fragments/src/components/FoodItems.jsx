import Item from "./Item";
import { useState } from "react";

const FoodItems = ({ items }) => {
  //let foodItems = ["Daal", "green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  let [activeItems, setActiveItems] = useState([]);

  let onBuyButton = (item, event) => {          //method declared
    let newItems = [...activeItems, item];
    setActiveItems(newItems);
  };

  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          foodItem={item}
          bought={activeItems.includes(item)}
          handleBuyButton={(event) => onBuyButton(item, event)}  //anonymus function
        ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
