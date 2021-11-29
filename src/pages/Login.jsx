import React, { useState, useEffect } from 'react'
import cogoToast from 'cogo-toast';
import { useMutation } from 'react-query';
import { useHistory } from "react-router-dom";
import useStore from '../store';
import { login } from '../servers/auth';
import Navbar from './Navbar';
import Footer from './Footer';
import LoginForm from '../components/loginForm';

function Login() {
    const isAuthenticated = useStore(state => state.isAuthenticated);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory()
    const loginAuth = useStore(state => state.login);
    const mutation = useMutation(login);
    const [error, setError] = useState("");

    //Making sure a user already logged in is not able to access the login page
    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
        }
        // eslint - disable - next - line;
    }, []);

    useEffect(() => {
        if (mutation.data) {
            loginAuth()
            const { hide } = cogoToast.success('Log in successful.', {
                onClick: () => {
                    hide();
                },

            });

            setTimeout(() => {
                localStorage.setItem('token', mutation.data.userData.token)
                history.push('/')
            }, 3000)

        }

    }, [mutation.data])

    const handleLogin = async (e) => {
        e.preventDefault();

        const user = {
            email, password
        }
        mutation.mutate(user)

    }

    const responseFacebook = (response) => {
        console.log(response.email);
    }
    return (
        <>
            <Navbar />
            <LoginForm handleLogin={handleLogin}
                error={error} mutation={mutation} password={password}
                setPassword={setPassword}
                email={email} setEmail={setEmail} 
                responseFacebook={responseFacebook}/>
            <Footer />
        </>
    )
}

export default Login
