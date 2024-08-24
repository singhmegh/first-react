//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/Errormsg";

function App() {
  //let foodItems =[];
  let foodItems = ["Daal", "green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    
    <>
      <h1>Healthy food items</h1>
     <ErrorMessages items={foodItems}></ErrorMessages>
      <FoodItems items ={foodItems}></FoodItems>
    </>
  );
}

export default App;
