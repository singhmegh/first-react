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
  let foodItems = ["Daal", "green Vegetables", "Roti", "Salad", "Milk", "Ghee"];

  let [textToShow, setTextState] = useState("Food Item Entered by User");

  console.log(`current value of textState:${textToShow}`);

  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
      <Container>
        <h1 className="heading">Healthy food items</h1>
        <ErrorMessages items={foodItems}></ErrorMessages>
        <Foodinput handleOnChange={handleOnChange}></Foodinput>
        <p>{textToShow}</p>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/*<Container>
<p>Above is the list of healthy food that are good for your health and well being.</p>
    </Container>*/}
    </>
  );
}

export default App;
