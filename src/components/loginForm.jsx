import React from 'react'
import FacebookLogin from 'react-facebook-login';
import { NavLink } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';

import styles from '../styles/style.module.css'
import '../styles/form.css'

function LoginForm({ handleLogin, error, mutation, password, setPassword, email, setEmail, responseFacebook }) {

    const activeStyle = { color: '#009688' };
    return (
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
                    {mutation.error ? (
                        <div
                            className={styles.error}
                        >
                            {mutation.error.message}
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
                            {mutation.isLoading ? 'Loading...' : 'Login'}
                        </button>
                    </div>
                    <div style={{ textAlign: 'center', color: '#fff' }}>
                        <strong>
                            Or
                        </strong>
                    </div>

                    <FacebookLogin
                        appId="3774838975977263"
                        autoLoad={false}
                        fields="name,email"
                        callback={responseFacebook}
                        cssClass="_input fblogin"
                        icon={<FaFacebook className="fb-icon" />}
                        textButton="&nbsp;&nbsp;Sign In with Facebook"
                    />
                    <p className="forgotten">
                        <NavLink exact to="/forgot-password" activeStyle={activeStyle}> Forgot Password</NavLink>
                    </p>
                    <p className="forgotten">
                        Don't have an account <NavLink exact to="/register" activeStyle={activeStyle}>Sign Up</NavLink>                        </p>
                </form>

            </div>
        </div>
    )
}

export default LoginForm
