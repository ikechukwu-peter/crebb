import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/home.css';

function Book() {
    return (
       
        <div className="form-container">
        <Navbar />
        <div className="form_head">
            <div className="form_subhead">
            <h2 className="intro_text">Book for a Session </h2>
            <form className="main_form">
                <label className="input_label" for="title">Title </label>
                <input className="_input" type="text" name="title" id="title" placeholder="Enter booking title" />
                <label className="input_label" for="date">Date and Time</label>
                <input className="_input" type="datetime-local" id="date" name="date"  />
                          <textarea  className="_input"  id="textarea" placeholder="Brief Description..." />
                <div className="btn-container">
                    <button className="btn" type="submit" >
                        Book
                    </button>
                </div>
            </form>

            </div>
            </div>
            <Footer />
            </div>
            
        
    )

}

export default Book
