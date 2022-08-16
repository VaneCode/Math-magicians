import React from 'react';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <span>
      <a className="logo" href="/">
        Math Magician
      </a>
    </span>
    <Navbar />
  </header>
);

export default Header;
