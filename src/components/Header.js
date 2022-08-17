import React from 'react';
import Navbar from './Navbar';
import '../styles/header.css';

const Header = () => (
  <header className="headerPage">
    <span>
      <a className="logo" href="/">
        Math Magician
      </a>
    </span>
    <Navbar />
  </header>
);

export default Header;
