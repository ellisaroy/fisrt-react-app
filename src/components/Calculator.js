import React from "react";
import "../Calculator.css";
import Button from "./Button";
const Calculator = () => {
    return(
        <>
            <div className='calculator-grid'>
                <div className='output'>
                    <div className="previous-operand"><p>1565*23 </p></div>
                    <div className='current-operand'>1213</div>
                </div>
                    <Button />
                </div>
        </>
    );
};

export default Calculator;