import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>Aaron Belmore | Full Stack Developer</h1>
      </div>
      <div className="nav">
        <ul>
          <li>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="nav-links" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <button className="nav-btn">Who Are You</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
