import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from '../Home';
import Search from '../components/Search';
import About from '../pages/About';
import Methods from '../pages/Methods';
import Hooks from '../pages/Hooks';
import Calculator from '../components/Calculator';
import Learning from '../pages/Learning';
import TextForm from '../components/TextForm';
const Routing = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/search" element={<Search/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/methods" element={<Methods/>} />
            <Route path="/hooks" element={<Hooks/>} />
            <Route path="/calculator" element={<Calculator/>} />
            <Route path="/learning" element={<Learning/>} />
            <Route path="/textform" element={<TextForm title="Enter the text to analyze"/>} />
        </Routes>
        </>
    );
}
export default Routing;
