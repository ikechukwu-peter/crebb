import React, { useState } from 'react'
import { FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import Modal from './Modal';
import Navbar from './Navbar';
import Footer from './Footer';
import Spinner from '../common/Spinner'
import '../styles/bookings.css';

function Bookings() {
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState(null)
    const [sessionData, setSessionData] = useState([{
        _id: 1,
        title: 'Buy a New Home',
        body: 'I am a man who is ready to buy a house',
        date: '2010-10-10',
        time: '2PM'
    },
    {
        _id: 2,
        title: 'Kill a goat',
        body: 'Killing is my hobby',
        date: '3010-10-10',
        time: '5PM'
    },
    {
        _id: 3,
        title: 'Drop a bom',
        body: 'I am a man who is ready to buy a house',
        date: '2030-10-10',
        time: '1PM'
    },
    ]);

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
            let data = sessionData.filter(session => session._id === id);
            console.log(e.target)
            
        }
    }

    const handleDelete = (e, id) => {
        e.preventDefault();
        const response = confirm('Are you sure you want to delete?');
        if (response) {
            let data = sessionData.filter(session => session._id !== id);
            console.log(data)
            data ? setSessionData(data) : setSessionData(null);
        }

    }

    return (
        <>
            <Navbar />
            <h1 className="booking-head">Bookings</h1>
            {loading ? <Spinner /> :
                <div className="card">
                    {
                        sessionData.length > 0 ? sessionData.map(session => {
                            return <div className="card-body" key={session._id}>
                                < Modal show={show} handleClose={hideModal} session={items} />
                                <h2 className="booking-title" onClick={() => showModal(session)}>{session.title}</h2>

                                <div className="action-container">
                                    <button className="cancel-booking"
                                      >
                                        <FaRegTimesCircle   onClick={(e) => handleCancel(e, session._id)} />
                                    </button>
                                    <button className="delete-booking" >
                                        <FaTrashAlt onClick={(e) => handleDelete(e, session._id)} />
                                    </button>

                                </div>
                            </div>
                        }) : <div>
                            <h2 className="no-booking">You have no session booked! 🤷‍♂️</h2>
                        </div>
                    }
                </div>}

            <Footer />
        </>

    )

}

export default Bookings
