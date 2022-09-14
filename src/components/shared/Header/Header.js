import { MailOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
const Header = (props) => {
  return (
    <>
      <nav>
        <a href="/">{props.title}</a>   
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">{props.aboutText}</Link>
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
            <li>
              <Link to="/calculator">Calulator</Link>
            </li>
            <li>
              <Link to="/learning">Learning</Link>
            </li>
            <li>
              <Link to="/textForm">TextForm</Link>
            </li>
            <li>
              <Link to="/postdata">PostData</Link>
            </li>
            <li>
              <Link to="/getpost">GetPost</Link>
            </li>
          </ul>
        </nav>
    </>
  );
};

Header.propTypes ={
  title:PropTypes.string.isRequired,
  aboutText:PropTypes.string
}
Header.defaultProps = {
  title: 'Stranger',
  aboutText : 'About'
};
export default Header;