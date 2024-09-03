import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [flagMenu, setFlagMenu] = useState(false);

  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    setEmail("");
    window.location.reload();
  };

  useEffect(() => {
    const storedemail = sessionStorage.getItem("email");

    if (storedemail) {
      setIsLoggedIn(true);
      setUsername(storedemail.split("@")[0]);
    }
  }, []);
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <h4>StayHealthy</h4>
        </div>
        <div id="menu-icon" onClick={() => setFlagMenu(!flagMenu)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        {flagMenu && (
          <ul className="nav-links-mobile">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/search/doctors">Appointments</Link>
            </li>
            <li>
              <Link to="/find-doctor">Find Doctor</Link>
            </li>
            <li>
              <Link to="/reviews">Reviews</Link>
            </li>
            {isLoggedIn ? (
              <>
                <li>
                  <div className="dropdown">
                  {/* <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

                    <Link  to="/profile">Welcome, {username}</Link>
                    </a> */}
                      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown link
                     </a>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li><Link to="/profile" className="dropdown-item"  /> Profile</li>
                      <li><a href="#" className="dropdown-item" >Appointments</a></li>
                    </ul>

                  </div>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/signup">
                    <button>Sign Up</button>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search/doctors">Appointments</Link>
          </li>
          <li>
            <Link to="/find-doctor">Find Doctor</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          {isLoggedIn ? ( // Conditional rendering
            <>
              <li>
              <div className="dropdown">
                  {/* <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">

                    <Link  to="/profile">Welcome, {username}</Link>
                    </a> */}
                      <a className="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                      <Link  to="/profile">Welcome, {username}</Link>
                      </a>
                    <ul className="dropdown-menu text-secondary" aria-labelledby="dropdownMenuLink">
                    <li><Link to="/profile"   ><span className="dropdown-item" >Your Profile</span></Link></li>
                    <li><Link to="/reports"   ><span className="dropdown-item" >Your Reports</span></Link></li>
                    </ul>

                  </div>              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            // Else part of conditional rendering
            <>
              <li>
                <Link to="/signup">
                  <button>Sign Up</button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <button>Login</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
