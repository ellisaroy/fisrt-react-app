import React,{useState} from "react";

const Button = () =>{
    const [buttonText, setButtonText] = useState('');
    const handleChange = (e) =>{
        const btnText = e.target.name;
        setButtonText(btnText);
        console.log(btnText);
    };
    return(
        <>
         <div className='output'>
            <div className="previous-operand"><p>{buttonText}</p></div>
            <div className='current-operand'>1213</div>
        </div>
            <button name="AC" onClick={handleChange} className='span-two'>AC</button>
            <button name="DEL"onClick={handleChange}>DEL</button>
            <button name="/" onClick={handleChange}>/</button>
            <button name="1" onClick={handleChange}>1</button>
            <button name="2" onClick={handleChange}>2</button>
            <button name="3" onClick={handleChange}>3</button>
            <button name="*" onClick={handleChange}>*</button>
            <button name="4" onClick={handleChange}>4</button>
            <button name="5" onClick={handleChange}>5</button>
            <button name="6" onClick={handleChange}>6</button>
            <button name="+" onClick={handleChange}>+</button>
            <button name="7" onClick={handleChange}>7</button>
            <button name="8" onClick={handleChange}>8</button>
            <button name="9" onClick={handleChange}>9</button>
            <button name="-" onClick={handleChange}>-</button>
            <button name="." onClick={handleChange}>.</button>
            <button name="0" onClick={handleChange}>0</button>
            <button name="=" onClick={handleChange} className='span-two'>=</button>
        </>
    );
}

export default Button;