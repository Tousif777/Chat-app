import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <NavLink className="navbar-brand" to="./">
        Mysite
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" to="./">
              Home <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="./body">
              Body
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="./footer">
              Footer
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
