import React from 'react'
import {FaEnvelope} from 'react-icons/fa'
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/bookings.css';

function Bookings() {
    return (
        <div>
            <Navbar />
            <h1 className="booking-head">Bookings</h1>
            <div className="card">
                <div className="card-body">
                    <h2 className="booking-title">Buy a New Home</h2>
                    <div className="action-container">
                    <p className="cancel-booking" > Cancel</p>
                    <p className="delete-booking" >  X</p>
                    </div>                    
                </div>
                <div className="card-body">
                    <h2 className="booking-title">Ventrue in to cryptocurrency</h2>
                    <div className="action-container">
                    <p className="cancel-booking" > Cancel</p>
                    <p className="delete-booking" >  X</p>
                    </div>                    
                </div>
                <div className="card-body">
                    <h2 className="booking-title">Learn dropshipping</h2>
                    <div className="action-container">
                    <p className="cancel-booking" > Cancel</p>
                    <p className="delete-booking" >  X</p>
                    </div>                    
                </div>

            </div>

            <Footer />
        </div>

    )

}

export default Bookings
