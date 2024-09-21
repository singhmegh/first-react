import Display from "./Components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./Components/ButtonsContainer";
import { useState } from "react";

function App() {
const [calVal , setCalVal] = useState("");
const onButtonClick = (buttonText) =>{
  if (buttonText === "c"){
setCalVal("");
  } else if ( buttonText === "="){
   const result =eval(calVal) ;     //eval is a method that evaluavate itself 
   setCalVal(result);
   } 
   else {
  const newDisplayValue = calVal + buttonText;
  setCalVal(newDisplayValue);
}
};

  return (
    <div className={styles.calculator} >
     <Display displayValue ={calVal}></Display>
     <ButtonsContainer onButtonClick ={onButtonClick}></ButtonsContainer>
    </div>
  );
}

export default App;
