import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/home.css';

function Session() {
    return (
        <div>
            <Navbar />
            <h2 className="intro_text">Book for a Session </h2>
            <form className="main_form">
                <label className="book-label" for="title">Title </label>
                <input className="book-input" type="text" name="title" id="title" placeholder="Enter booking title" />
                <label className="book-label" for="date">Date </label>
                <input className="book-input" type="datetime-local" id="date" name="date"  />
                <textarea className="book-input" name="message" id="message" placeholder="Brief Description..." />
                <div className="btn-container">
                    <button className="book-btn" type="submit" >
                        Book
                    </button>
                </div>
            </form>

            <Footer />
        </div>

    )

}

export default Session
