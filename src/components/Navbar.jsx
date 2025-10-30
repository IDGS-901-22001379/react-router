import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbsr navbar-dark bg-dark">
      <NavLink to="/" className="btn btn-outline-primary">
        home
      </NavLink>
      <NavLink to="/about" className="btn btn-outline-primary">
        About
      </NavLink>
      <NavLink to="/blog" className="btn btn-outline-primary">
        Blog
      </NavLink>
    </nav>
  );
};

export default Navbar;
