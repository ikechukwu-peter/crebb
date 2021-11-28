import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BookForm from '../components/bookForm';
import { useMutation } from 'react-query';
import { book } from '../servers/book'

function Book() {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [body, setBody] = useState("")

    const mutation = useMutation(book)
    const handleBooking = async (e) => {
        e.preventDefault();
          const newBooking = {
            title, body, date
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
                date={date} setDate={setDate}
                body={body} setBody={setBody} />
            <Footer />
        </div>


    )

}

export default Book
