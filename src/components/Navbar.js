import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <ul className="navUl">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default Navbar;
