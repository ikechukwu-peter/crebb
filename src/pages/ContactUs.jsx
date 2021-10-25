import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/style.module.css'
import '../styles/form.css'


function ContactUs() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("")
    const [error, setError] = useState("");


    const handleMessage = async (e) => {
        e.preventDefault();
        const newMessage = {
            name,
            email,
            subject,
            message,
        }
        console.table(newMessage)
    }

    return (
        <div className="form-container">
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form" onSubmit={handleMessage}>
                        <h2 className="intro_text"> Hey!! Shoot 🔫 us an email </h2>
                        {error ? (
                            <div
                                className={styles.error}
                            >
                                {error}
                            </div>
                        ) : null}
                        <label className="input_label" htmlFor="name">Name </label>
                        <input className="_input" type="text" id="name" placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            autoFocus />
                        <label className="input_label" htmlFor="email">Email </label>
                        <input className="_input" type="email" id="email" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label className="input_label" htmlFor="subject">Subject </label>
                        <input className="_input" type="text" id="subject" placeholder="Enter email subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                        />

                        <textarea className="_input" id="textarea" placeholder="Enter your message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <div className="btn-container">

                            <button className="btn" type="submit" >
                                Send
                            </button>
                        </div>
                    </form>

                </div>
            </div>
            <Footer />
        </div>

    )

}

export default ContactUs
