import React, { useState, useEffect } from 'react';
import cogoToast from 'cogo-toast';
import { useHistory } from 'react-router-dom'
import Navbar from './Navbar';
import Footer from './Footer';
import BookForm from '../components/bookForm';
import { useMutation } from 'react-query';
import { book } from '../servers/book'

function Book() {
    const [title, setTitle] = useState("");
    const [datetime, setDatetime] = useState("");
    const [body, setBody] = useState("")
    const history = useHistory();

    const mutation = useMutation(book);

    useEffect(() => {
        if (mutation.data) {
            setTitle("")
            setDatetime("")
            setBody("")

            const { hide, hideAfter } = cogoToast.success('Session booked successfully.\nYou will be redirected to see all your bookings', {
                onClick: () => {
                    hide();
                },
                hideAfter: 5
            });

            setTimeout(() => {
                history.push('/see-all-sessions')
            }, 5000)
        }
    }, [mutation.data])

    const handleBooking = async (e) => {
        e.preventDefault();
        const newBooking = {
            title, body, datetime
        }
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
