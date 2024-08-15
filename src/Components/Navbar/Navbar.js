import React,{ useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from 'react-router-dom';


function Navbar() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const[email,setEmail]=useState("");


  const handleLogout = () => {
    sessionStorage.removeItem("auth-token");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("phone");
    // remove email phone
    localStorage.removeItem("doctorData");
    setIsLoggedIn(false);
    setEmail('');
    window.location.reload();
}

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
        <ul className="nav-links">
          <li>

          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/search/doctors">Appointments</Link>

          </li>
          <li>
          <Link to="/reviews">Reviews</Link>
          </li>
          {isLoggedIn ? ( // Conditional rendering
            <><li>
              <Link to="/profile">Welcome, {username}</Link>
            </li>
            <li>
                <button onClick={handleLogout}>Logout</button>
            </li></>
          ) : ( // Else part of conditional rendering   
            <>
              <li><Link to="/signup"><button>Sign Up</button></Link></li>
              <li><Link to="/login"><button>Login</button></Link></li>
            </>
          )}
          

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
