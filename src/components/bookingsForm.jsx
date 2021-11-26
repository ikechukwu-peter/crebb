import React from 'react'
import {FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import Modal from './Modal';
import Spinner from '../common/Spinner'
import styles from '../styles/style.module.css'
import '../styles/bookings.css';

function BookingsForm({handleCancel, handleDelete, hideModal, 
    showModal, show,  items, sessionData, error, isLoading}) {
    return (
        <>
        <h1 className="booking-head">Bookings</h1>
            {isLoading ? <Spinner /> :
                <div className="card">
                     {error ? (
                        <div
                            className={styles.error}
                        >
                            {error}
                        </div>
                    ) : null}
                    {
                        sessionData.results.length > 0 ? sessionData.data.doc.map(session => {
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
                </>
    )
}

export default BookingsForm
