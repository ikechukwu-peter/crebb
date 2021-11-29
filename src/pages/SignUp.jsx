import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'
import cogoToast from 'cogo-toast';
import useStore from '../store';
import Navbar from './Navbar';
import Footer from './Footer';
import SignupForm from '../components/signupForm';
import { useMutation } from 'react-query';
import { signup } from '../servers/auth';


function SignUp() {
    const isAuthenticated = useStore(state => state.isAuthenticated)
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const mutation = useMutation(signup);
    const history = useHistory()

    //Making sure a user already logged in is not able to access the login page
    useEffect(() => {
        if (isAuthenticated) {
            history.push("/");
        }
        // eslint - disable - next - line;
    }, []);

    useEffect(() => {
        if (mutation.data) {
            const { hide, hideAfter} = cogoToast.info('Please check your email for your password.\n You will be taken to the login page shortly.', {
                onClick: () => {
                    hide();
                },
                hideAfter: 5

            });
            setTimeout(() => {
                history.push('/login')
            }, 5000)

        }
    }, [mutation.data])

    const handleSignup = async (e) => {
        e.preventDefault()
        const newUser = {
            email,
            username,
        }
        mutation.mutate(newUser)

    }

    const responseFacebook = (response) => {
        console.log(response);
    }
    return (
        <>
            <Navbar />
            <SignupForm email={email} setEmail={setEmail} username={username}
                setUsername={setUsername} mutation={mutation}
                handleSignup={handleSignup} responseFacebook={responseFacebook} />
            <Footer />
        </>

    )
}

export default SignUp
