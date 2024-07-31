import React from "react";
import "./Sign_Up.css";
import { Link } from "react-router-dom";

const Sign_Up = () => {

    return (
        <>
        <section class="section-login-signUp">
        <div class="sign-up-form">
            <h1>Sign Up</h1>
            <p style={{ textAlign: "center" }}>Already a member? <span style={{ color:"#2B4BF0" }}><b><Link to="login">Login</Link></b></span></p>
            <form action="">
                <div class="form-group">
                    <label for="role">Role</label>
                    <select name="role" id="role">
                        <option value="patient">Patient</option>
                        <option value="doctor">Doctor</option>
                    </select>
                </div>
                <div class="form-group
                ">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" required />
                </div>
                <div class="form-group
                ">
                    <label for="phone">Phone Number</label>
                    <input type="text" id="phone" name="phone" placeholder="Enter your phone number" pattern="\d{10}" required />
                </div>
                <div class="form-group
                ">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                </div>
                <div class="form-group
                ">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" required />
                </div>
                <div class="form-group
                ">
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </form>
        </div>


    </section>
    </>
    )
}

export default Sign_Up;
