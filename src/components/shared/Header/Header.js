import { MailOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
const Header = () => {
  return (
    <>
      <nav>   
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Search">Search</Link>
            </li>
            <li>
              <Link to="/hooks">Hooks</Link>
            </li>
            <li>
              <Link to="/methods">Array Methods</Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

export default Header;