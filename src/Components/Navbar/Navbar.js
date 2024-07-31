// react function add Navbar.html inside return

import React from "react";
import "./Navbar.css";

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
            <a href="../Sign_Up/Sign_Up.html">
              <button>Sign Up</button>
            </a>
          </li>
          <li>
            <a href="../Login/Login.html">
              <button>Login</button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
