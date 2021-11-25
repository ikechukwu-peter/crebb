import React, { useState, useEffect, useLayoutEffect } from 'react'
import FacebookLogin from 'react-facebook-login';
import { NavLink, useHistory } from "react-router-dom";
import { FaFacebook } from 'react-icons/fa';
import styles from '../styles/style.module.css'
import '../styles/form.css'
import { useMutation } from 'react-query';
import useStore from '../store';
import { login } from '../servers/auth';

function LoginForm() {
    const isAuthenticated = useStore(state => state.isAuthenticated)
    console.log(isAuthenticated)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const loginAuth = useStore(state => state.login);
    const mutation = useMutation(login);
    const [error, setError] = useState("");


    //Making sure a user already logged in is not able to access the login page
    if(isAuthenticated){
        history.push("/");
    }
    useLayoutEffect(() => {
        if (isAuthenticated) {

            console.log('I was called')
            history.push("/");
        }
        // eslint - disable - next - line;
    }, []);

    // const {data, error, isLoading} = useQuery('loginData', login)
    useEffect(() => {
        if (mutation.data) {
            console.log(mutation.data)
            loginAuth()
            localStorage.setItem('token', mutation.data.userData.token)
            history.push('/')

        }

    }, [mutation.data])

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("I ran")

        const user = {
            email, password
        }
        console.table(user)
        mutation.mutate(user)


    }

    const responseFacebook = (response) => {
        console.log(response.email);
    }

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
