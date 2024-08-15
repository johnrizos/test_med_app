// Following code has been commented with appropriate comments for your reference.
import React, { useState, useEffect } from 'react';
// Apply CSS according to your design theme or the CSS provided in week 2 lab 2
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const Login = () => {


  // State variables for email and password
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState('');
  // Get navigation function from react-router-dom
  const navigate = useNavigate();
  // Check if user is already authenticated, then redirect to home page
  useEffect(() => {
    if (sessionStorage.getItem("auth-token")) {
      navigate("/");
    }
  }, []);
  // Function to handle login form submission
  const login = async (e) => {
    e.preventDefault();
    // Send a POST request to the login API endpoint
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    // Parse the response JSON
    const json = await res.json();
    if (json.authtoken) {
      // If authentication token is received, store it in session storage
      sessionStorage.setItem('auth-token', json.authtoken);
      sessionStorage.setItem('email', email);
      // Redirect to home page and reload the window
      navigate('/');
      window.location.reload();
    } else {
      // Handle errors if authentication fails
      if (json.errors) {
        for (const error of json.errors) {
          alert(error.msg);
        }
      } else {
        alert(json.error);
      }
    }
  };

    return (
        <>
            <section className="section-login-signUp">
        <form className="sign-up-form">
            <h1>Login</h1>
            <p style={{ "textAlign":"center","marginBottom":"10px" }}>Are you a new member? <span style={{"color":"#2B4BF0"}}><b><a href="../Sign_Up/Sign_Up.html">Sign Up Here</a></b></span></p>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input  value={email} 
                  onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </div>
            <div className="form-group">
                <label  htmlFor="password">Password</label>
                <input value={password} 
                  onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' type="password" id="password" name="password" required />
            </div>
            <div className="form-group">
                <button onClick={login} type="submit">Login</button>
                <button type="reset">Reset</button>

            </div>

            <p style={{"color":"#535151","textAlign":"center"}}>Forgot Password?</p>
        </form>


    </section>
        </>
    )
}

export default Login;