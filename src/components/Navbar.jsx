import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <h1>Aaron Belmore | Full Stack Developer</h1>
        </Link>
      </div>
      <div className="nav">
        <ul>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
          </svg> */}
          <li className={isOpen ? "active" : "closed"}>
            <Link className="nav-links" to="/">
              Home
            </Link>
          </li>

          <li className={isOpen ? "active" : "closed"}>
            <Link className="nav-links" to="/about">
              About
            </Link>
          </li>
          <li className={isOpen ? "active" : "closed"}>
            <Link className="nav-links" to="/form">
              <button className="nav-btn">Who Are You</button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
