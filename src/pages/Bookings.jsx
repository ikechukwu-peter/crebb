import React, { useEffect, useState } from 'react'
import { useQuery, useQueryClient } from 'react-query'
import axios from 'axios'
import cogoToast from 'cogo-toast';
import BookingsForm from '../components/bookingsForm';
import Navbar from './Navbar';
import Footer from './Footer';
import { bookings } from '../servers/bookings'
import { deleteReq } from '../servers/delete'
import { baseURL } from '../servers/baseURl'


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
            data.data.doc.filter(session => {
                let token = localStorage.token
                axios.delete(baseURL + 'session/delete/' + session._id,
                    { headers: { 'Authorization': `Bearer ${token}` } }).then(result => {
                        if (result.status === 204) {
                            const { hide, hideAfter } = cogoToast.success('Deleted successfully', {
                                onClick: () => {
                                    hide();
                                },
                                hideAfter: 5
                            });
                        }

                    }).catch(err => {
                        throw new Error(err.response ? err.response.data.err : "Please check your internet connection");
                    })
            }
            )
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
