import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navBar">
      <ul className="navUl">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/CalculatorPage">Calculator</Link>
        </li>
        <li>
          <Link to="/Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
