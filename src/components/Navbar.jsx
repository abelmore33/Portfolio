import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div>
        <h1>Aaron Belmore</h1>
      </div>
      <div className="nav">
        <ul>
          <li className="nav-links">
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-links">
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <button>Who Are You</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
