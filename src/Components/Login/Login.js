import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";


const Login = () => {

    return (
        <>
            <section class="section-login-signUp">
        <form class="sign-up-form">
            <h1>Login</h1>
            <p style={{ "textAlign":"center","marginBottom":"10px" }}>Are you a new member? <span style={{"color":"#2B4BF0"}}><b><a href="../Sign_Up/Sign_Up.html">Sign Up Here</a></b></span></p>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required />
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
                <button type="reset">Reset</button>

            </div>

            <p style={{"color":"#535151","textAlign":"center"}}>Forgot Password?</p>
        </form>


    </section>
        </>
    )
}

export default Login;