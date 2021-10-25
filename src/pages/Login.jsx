import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/style.module.css'
import '../styles/form.css'


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if(email && password.length >= 6){
              const user = {
                email, password
            }
            console.table(user)
            setEmail("")
            setPassword("")
         
        }
     
    //   setError('Minimum length of password is six (6)')
        
    }

    const activeStyle = { color: '#009688' };
    return (
        <div>
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form" onSubmit={handleLogin}>
                        <h2 className="intro_text"> Welcome 😉, Login to keep booking... </h2>
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
                        <input className="_input" type="password" id="password" placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
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
