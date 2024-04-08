import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="NavBar">
      <Link to="/"> Vending Machine </Link>
      <Link to="/soda"> Soda </Link>
      <Link to="/sardines"> Sardines </Link>
      <Link to="/snacks"> Snacks </Link>
    </nav>
  );
}

export default NavBar;