import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import BookingsForm from '../components/bookingsForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { bookings } from '../servers/bookings'


function Bookings() {
    const [show, setShow] = useState(false);
    const [items, setItems] = useState(null)
    let { data, error, isLoading } = useQuery('session', bookings);

    const showModal = (value) => {
        setItems(value);
        setShow(true)

    }
    const hideModal = () => {
        setShow(false)
    }


    const handleCancel = (e, id) => {
        e.preventDefault();
        const response = confirm('Are you sure you want to cancel?')
        if (response) {
            let canceled = data.filter(session => session._id === id);
            console.log(e.target)

        }
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
          const response = confirm('Are you sure you want to delete?');
        if (response) {
            let deletedObj = data.data.doc.filter(session => session._id !== id);
            data = deletedObj;
            console.log(data)
           console.log(deletedObj)
        }

    }

    return (
        <>
            <Navbar />
            <BookingsForm handleDelete={handleDelete}
                handleCancel={handleCancel}
                hideModal={hideModal}
                showModal={showModal}
                show={show}
                setShow={setShow}
                items={items}
                sessionData={data}
                isLoading={isLoading}
                error={error} />
            <Footer />
        </>

    )

}

export default Bookings
