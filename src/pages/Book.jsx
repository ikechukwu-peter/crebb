import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from '../styles/style.module.css'
import '../styles/home.css';

function Book() {
    const [title, setTitle] = useState("");
    const [datetime, setDatetime] = useState("");
    const [body, setBody] = useState("")
    const [error, setError] = useState("");


    const handleBooking = async (e) => {
        e.preventDefault();
        let date = datetime.split('T')[0]
        let time = datetime.split('T')[1]
        const newBooking = {
            title,
            body,
            date,
            time
        }
        console.table(newBooking)
        setTitle("")
        setDatetime("")
        setBody("")
    }

    return (

        <div className="form-container">
            <Navbar />
            <div className="form_head">
                <div className="form_subhead">
                    <h2 className="intro_text">Book for a Session </h2>
                    {error ? (
                        <div
                            className={styles.error}
                        >
                            {error}
                        </div>
                    ) : null}
                    <form className="main_form" onSubmit={handleBooking}>
                        <label className="input_label" htmlFor="title">Title </label>
                        <input className="_input" type="text" name="title" id="title" placeholder="Enter booking title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                           />
                        <label className="input_label" htmlFor="date">Date and Time</label>
                        <input className="_input" type="datetime-local" id="date" name="date"
                            value={datetime}
                            onChange={(e) => setDatetime(e.target.value)}
                            required
                        />
                        <textarea className="_input" id="textarea" placeholder="Brief Description..."
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            required
                        />
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
