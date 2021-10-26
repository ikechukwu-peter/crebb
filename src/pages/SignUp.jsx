import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import { NavLink } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa'
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

    const responseFacebook = (response) => {
        console.log(response);
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

                        <div className="btn-container">
                            <button className="btn" type="submit" >
                                Sign Up
                            </button>
                        </div>
                        <div style={{textAlign: 'center', color: '#fff'}}>
                        <strong>
                            Or
                        </strong>
                        </div>
                      

                        <FacebookLogin
                            appId="3774838975977263"
                            autoLoad={true}
                            fields="name,email"
                            callback={responseFacebook}
                            cssClass="_input fblogin"
                            icon={<FaFacebook className="fb-icon" />}
                            textButton="&nbsp;&nbsp;Sign Up with Facebook"
                        />
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
