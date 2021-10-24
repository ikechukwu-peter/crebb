import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/form.css'


function Login() {
    const activeStyle = { color: '#009688' };
    return (
        <div>
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form">
                        <h2 className="intro_text"> Welcome 😉, Login to keep booking... </h2>
                        <label className="input_label" for="email">Email </label>
                        <input className="_input" type="email" id="email" placeholder="Enter your email" />
                        <label className="input_label" for="password">Password </label>
                        <input className="_input" type="password" id="password" placeholder="Enter your password" />
                        <div className="btn-container">
                            <button className="btn" type="submit" >
                              Login
                            </button>
                        </div>

                        <p className="forgotten"> 
                            <NavLink exact to="/forgot-password" activeStyle={activeStyle}> Forgot Password</NavLink>
                        </p>
                        <p className="forgotten">
                            Don't have an account <NavLink exact to="/register" activeStyle={activeStyle}>Sign Up</NavLink>                        </p>
                    </form>

                </div>
            </div>
            <Footer />
        </div>

    )

}

export default Login
