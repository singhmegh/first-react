//import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessages from "./components/Errormsg";
import Container from "./components/Container";

function App() {
  //let foodItems =[];
  let foodItems = ["Daal", "green Vegetables", "Roti", "Salad", "Milk", "Ghee"];
  return (
    <>
    <Container>
      <h1 className="heading">Healthy food items</h1>
     <ErrorMessages items={foodItems}></ErrorMessages>
      <FoodItems items ={foodItems}></FoodItems>
    </Container>

    <Container>
<p>Above is the list of healthy food that are good for your health and well being.</p>
    </Container>
    </>
  );
}

export default App;
