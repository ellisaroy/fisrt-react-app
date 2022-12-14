import { Menu, Switch } from 'antd';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
const Footer = () => {
const footerStyle = {
    background:'grey',
    padding:'20px'
}
const paragraph = {
    color:'#fff',
    fontSize:'16px',
    textAlign:'Center'
}
const root = ReactDOM.createRoot(
    document.getElementById('root')
);
function tick(){
    const date = (
        <>
        <div id="root"></div>
         <div>
            <h1>This is just for testing</h1>
            <h2>It is {new Date().toLocaleTimeString()}</h2>
        </div>
        </>
    );
    root.render(date);
}
//setInterval(tick,4000);

    return(
        <>
            <footer className='custom-footer' style={footerStyle}>
                <p style={paragraph}>This is just a footer</p>
                <p style={paragraph} onClick={tick}>To tick</p>
           
            </footer>
        </>
    );
};
export default Footer;