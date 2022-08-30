
import './App.css';
import 'antd/dist/antd.css';
import  Slider from './components/Carousel';
import { useState,useEffect,createContext,useContext  } from 'react';
import ReactDOM from "react-dom/client";
import Footer from './components/shared/Footer/Footer';

function Home() {
  const name = "My name is anything";
  // const [brand,setBrand] = useState("Tata");   //Single hook
  // const [color,setColor] = useState("Blue");
  // const [model,setModel] = useState("XYZ");
  // const [price,setPrice] = useState(2000000);
  const [car,setCar]=useState({       // Multiple state hooks
    brand :"Tata",
    color:"Red",
    model :"XYZ",
    price:"2000000"
  });
  const updateColor = () =>{
    setCar(
      previousState =>{
        return{...previousState,color:"blue"}
      }
    );
  }
const [count,setCount] = useState(1);

useEffect(()=>{
  console.log("Just for testing useEffect");
  setTimeout(()=>{
    setCount((count) => count+1);
  },1000);
},[]);     //componentDidMount
  return (
   <>
    <h1>I've rendered {count} times!</h1>;
    <h1>From name variable get:{name}</h1>
    <p>
      My new {car.brand} is of {car.color} color and model is: {car.model} worth is: {car.price}
    </p>
    <button type="button" onClick={updateColor}>Blue</button>
    <Slider />
    {/* <About greet="Welcome" who="Aliens"/> */}
    <Footer />
   </>
  );
}


export default Home;


