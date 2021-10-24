import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/form.css'


function ContactUs() {
    const activeStyle = { color: '#009688' };
    return (
        <div>
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <form className="main_form">
                        <h2 className="intro_text"> Hey!! Shoot 🔫 us an email </h2>
                        <label className="input_label" for="name">Name </label>
                        <input className="_input" type="text" id="name" placeholder="Enter your name" />
                        <label className="input_label" for="email">Email </label>
                        <input className="_input" type="email" id="email" placeholder="Enter your email" />
                        <label className="input_label" for="subject">Subject </label>
                        <input className="_input" type="text" id="subject" placeholder="Enter email subject" />
                   
                        <textarea className="_input"  id="textarea" placeholder="Enter your message" />
                        <div className="btn-container">

                            <button className="btn" type="submit" >
                                <span></span>
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
