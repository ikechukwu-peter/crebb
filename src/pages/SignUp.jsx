import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/style.module.css'
import '../styles/form.css'


function SignUp() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault()
        const newUser = {
            email,
            password
        }
        console.table(newUser)
    }

    const activeStyle = { color: '#009688' };
    return (
        <div>
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form" onSubmit={handleSignup}>
                        <h2 className="intro_text"> Join 😎Crebb today and get support for free.</h2>
                        {error ? (
                            <div
                                className={styles.error}
                            >
                                {error}
                            </div>
                        ) : null}
                        <label className="input_label" htmlFor="email">Email </label>
                        <input className="_input" type="email" id="email" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />

                        <label className="input_label" htmlFor="password">Password </label>
                        <input className="_input" type="password" id="password" placeholder="Enter your password" />
                        <div className="btn-container">
                            <button className="btn" type="submit" >
                                Sign Up
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
