import React, { useState } from "react";
import "../Calculator.css";
//import Button from "./Button";
const Calculator = () => {
    const [buttonText, setButtonText] = useState("");
    const backspace = () =>{
        try{
            setButtonText(buttonText.slice(0,-1))    
        }
        catch(error){
            setButtonText(""); 
        }
    };
    const calculate = () =>{
        try{
            setButtonText(eval(buttonText));    
        }
        catch(error){
            setButtonText("Error");
        }
    };
  return (
    <>
      <div className="calculator-grid">
        <input type="text" className="output span-two" value= { buttonText} style={{ fontSize:"35px" }} />
        <button name="AC/DEL" value="AC/DEL" onClick={() => backspace()}>
        AC
      </button>
      <button name="/" value="/" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        /
      </button>
      <button name="1" value="1" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        1
      </button>
      <button name="2" value="2" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        2
      </button>
      <button name="3" value="3" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        3
      </button>
      <button name="*" value="*" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        *
      </button>
      <button name="4" value="4" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        4
      </button>
      <button name="5" value="5" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        5
      </button>
      <button name="6" value="6" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        6
      </button>
      <button name="+" value="+" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        +
      </button>
      <button name="7" value="7" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        7
      </button>
      <button name="8" value="8" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        8
      </button>
      <button name="9" value="9" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        9
      </button>
      <button name="-" value="-" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        -
      </button>
      <button name="." value="." onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        .
      </button>
      <button name="0" value="0" onClick={(e) =>setButtonText(buttonText + e.target.value)}>
        0
      </button>
      <button name="=" value="=" onClick={() => calculate() } className="span-two">
        =
      </button>
      </div>
    </>
  );
};

export default Calculator;
