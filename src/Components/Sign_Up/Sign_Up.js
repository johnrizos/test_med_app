import React,{ useState } from "react";
import "./Sign_Up.css";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


    
// Function component for Sign Up form
const Sign_Up = () => {
    // State variables using useState hook
    const [role, setRole] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [showerr, setShowerr] = useState(''); // State to show error messages
    const navigate = useNavigate(); // Navigation hook from react-router

   // Function to handle form submission
   const register = async (e) => {
    e.preventDefault(); // Prevent default form submission
    // API Call to register user
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            phone: phone,
        }),
    });
    const json = await response.json(); // Parse the response JSON
    if (json.authtoken) {
        // Store user data in session storage
        sessionStorage.setItem("auth-token", json.authtoken);
        sessionStorage.setItem("name", name);
        sessionStorage.setItem("phone", phone);
        sessionStorage.setItem("email", email);
        // Redirect user to home page
        navigate("/");
        window.location.reload(); // Refresh the page
    } else {
        if (json.errors) {
            for (const error of json.errors) {
                setShowerr(error.msg); // Show error messages
            }
        } else {
            setShowerr(json.error);
        }
    }
};

    // JSX to render the Sign Up form

    return (
        <>
        <section className="section-login-signUp">
        <div className="sign-up-form">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>Already a member? <span style={{ color:"#2B4BF0" }}><b><Link to="login">Login</Link></b></span></p>
            <form  method="POST" onSubmit={register}>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select value={role} onChange={ (e) => setRole(e.target.value)} name="role" id="role">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div className="form-group
                ">
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={ (e) => setName(e.target.value)} type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div className="form-group
                ">
                    <label htmlFor="phone">Phone Number</label>
                    <input value={phone} onChange={ (e) => setPhone(e.target.value)} type="text" id="phone" name="phone" placeholder="Enter your phone number" pattern="\d{10}" required />
                </div>
                <div className="form-group
                ">
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                </div>
                <div className="form-group
                ">
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)}  type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group
                ">
                    <button onClick={register} type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
                {showerr && <div classNameName="err" style={{ color: 'red' }}>{showerr}</div>}

            </form>
        </div>


    </section>
    </>
    )
}

export default Sign_Up;
