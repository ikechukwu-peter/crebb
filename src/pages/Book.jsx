import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BookForm from '../components/bookForm';
import { useMutation } from 'react-query';
import { book } from '../servers/book'

function Book() {
    const [title, setTitle] = useState("");
    const [datetime, setDatetime] = useState("");
    const [body, setBody] = useState("")

    const mutation = useMutation(book)
    const handleBooking = async (e) => {
        e.preventDefault();
        let date = datetime.split('T')[0]
        let time = datetime.split('T')[1]
        const newBooking = {
            title, body, date, time
        }
        console.table(newBooking)
        setTitle("")
        setDatetime("")
        setBody("")
        mutation.mutate(newBooking)
    }

    return (
        <div className="form-container">
            <Navbar />
            <BookForm mutation={mutation} handleBooking={handleBooking}
                title={title} setTitle={setTitle}
                datetime={datetime} setDatetime={setDatetime}
                body={body} setBody={setBody} />
            <Footer />
        </div>


    )

}

export default Book
