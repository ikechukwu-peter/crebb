import React from 'react'
import styles from '../styles/style.module.css'
import '../styles/home.css';

function BookForm({ mutation, handleBooking, title,setTitle, setBody, setDatetime, datetime, body}) {
    return (
        <>
             <div className="form_head">
                <div className="form_subhead">
                    <h2 className="intro_text">Book for a Session </h2>
                    {mutation.error ? (
                        <div
                            className={styles.error}
                        >
                            {mutation.error.message}
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
                            <button disabled={!title || !datetime || !body || mutation.isLoading} className="btn" type="submit" >
                               {mutation.isLoading?'Loading...': ' Book'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default BookForm
