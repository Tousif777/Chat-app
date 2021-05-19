import React from "react";
import { Link } from "react-router-dom";
import Css from "./Nav.css";
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <Link className="navbar-brand" to="./">
        Navbar
      </Link>
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
            <Link className="nav-link" to="./">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./body">
              Body
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="./footer">
              Footer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
