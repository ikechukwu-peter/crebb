import React from 'react';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/header.module.css'
import '../styles/form.css'


function SignUp() {
    const activeStyle = {color: '#009688' };  
    return (
        <div className={styles.banner}>
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form">
                        <h2 className="intro_text"> Join 😎Crebb today and get support for free.</h2>
                        <label className="input_label" for="email">Email </label>
                        <input className="_input" type="email" id="email" placeholder="Enter your email" />
                        <label className="input_label" for="password">Password </label>
                        <input className="_input" type="password" id="password" placeholder="Enter your password" />
                        <div className="btn-container">
                            <button className="btn" type="submit">
                            Sign Up
                            <span></span>
                      
                        </button>
                        </div>

                        <p className="forgotten">Already has an account?                           
                                <NavLink exact to="/login" activeStyle={activeStyle}> Login</NavLink>                 
                        </p>
                    </form>

                </div>
                <Footer />

            </div>
        </div>

    )

}

export default SignUp
