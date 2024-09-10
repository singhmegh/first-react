//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/Errormsg";
import Container from "./components/Container";
import Foodinput from "./components/foodInput";
import { useState } from "react";

function App() {
  //let foodItems =[];

  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy food items</h1>

        <Foodinput handlekeyDown={onKeyDown}></Foodinput>
        <ErrorMessages items={foodItems}></ErrorMessages>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      
    </>
  );
}

export default App;
