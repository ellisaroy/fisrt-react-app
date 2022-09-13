import {
  useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
  useRef,
} from "react";
const Hooks = () => {
  const [inputValue, setinputValue] = useState("Testing");
  const valueChange = (event) => {
    console.log(event);
    const newValue = event.target.value;
    setinputValue(newValue);
  };
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  // reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "Increment":
        return { count: state.count + 1, showText: state.showText };
      case "toogleShowText":
        return { count: state.count, showText: !state.showText };
      case "Decrement":
        return { count: state.count - 1, showText: !state.showText };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });
  // useref
  const inputRef = useRef(null);
  const valueChanged = () => {
    inputRef.current.focus();
    inputRef.current.value = "";
  };
  return (
    <>
      <h1>Use of hooks</h1>
      <p>Using usestate hook</p>Counter value is:{counter}
      <button type="button" onClick={increment}>
        increment
      </button>
      <br></br>
      <br></br>
      <br></br>
      <input placeholder="Enter something here" onChange={valueChange} />{" "}
      {inputValue}
      <p>Using Reducer hook</p>
      <h2>Another count is: {state.count}</h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "Increment" });
          dispatch({ type: "toogleShowText" });
        }}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "Decrement" });
          dispatch({ type: "toogleShowText" });
        }}
      >
        Decrement
      </button>
      {state.showText && <p>This is just the text</p>}
      <h3>Use of ref</h3>
      <input type="text" placeholder="enter your name" ref={inputRef} />
      <button type="button" onClick={valueChanged}>
        Clear
      </button>
    </>
  );
};

export default Hooks;
