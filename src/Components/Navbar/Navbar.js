// react function add Navbar.html inside return
// add in Navbar.js links for Login.js and Sign_Up.js

import React from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';



function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h4>StayHealthy</h4>
        </div>
        <ul className="nav-links">
          <li>

            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#appointment">Appointment</a>

          </li>
          <li>
            <a href="#reviews">Reviews</a>
          </li>
          <li>
            <Link to="signup">
              <button>Sign Up</button>
            </Link>
          </li>
          <li>
            <Link to="login">
              <button>Login</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
