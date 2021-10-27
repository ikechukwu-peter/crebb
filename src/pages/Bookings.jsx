import React from 'react'
import { FaRegTimesCircle, FaTrashAlt } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/bookings.css';

function Bookings() {
    const handleCancel = (e) => {
        const confirmCancel = confirm("Are sure you want to cancel this appointment?");
        if (confirmCancel) {
            console.log(e.target)

        }
        return;
    }
    const handleDelete = (e) => {
        const deleteCancel = confirm("Are sure you want to delete this appointment? This is irreversible!!");
        if (deleteCancel) {
            console.log(e.target)
            e.target.parentElement.parentElement.parentElement.remove()
        }
        return;
    }

    return (
        <div>
            <Navbar />
            <h1 className="booking-head">Bookings</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="booking-title">Buy a New Home</h2>
                    <div className="action-container">
                        <div className="action-container">
                            <button className="cancel-booking" onClick={handleCancel}
                            > <FaRegTimesCircle /> </button>
                            <button className="delete-booking" >  <FaTrashAlt onClick={handleDelete} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="booking-title">Ventrue in to cryptocurrency</h2>
                    <div className="action-container">
                        <div className="action-container">
                            <button className="cancel-booking"  onClick={handleCancel} > <FaRegTimesCircle /> </button>
                            <button className="delete-booking" >  <FaTrashAlt onClick={handleDelete} /></button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="booking-title">Learn dropshipping</h2>
                    <div className="action-container">
                        <button className="cancel-booking"   onClick={handleCancel}> <FaRegTimesCircle /> </button>
                        <button className="delete-booking" >  <FaTrashAlt onClick={handleDelete} /></button>
                    </div>
                </div>

            </div>

            <Footer />
        </div>

    )

}

export default Bookings
