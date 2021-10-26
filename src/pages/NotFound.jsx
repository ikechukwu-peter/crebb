import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import '../styles/not-found.css'

function NotFound() {
       return (
        <div>
            <Navbar />
           <div className="not-found">
            <strong className="error-name">404
           </strong>
      
           <p className="error-text"> <strong> Sorry, <br /> </strong>The page you requested for was not found. 🤦‍♂️</p>
           <p className="back-link">
                            Click to go  <NavLink exact to="/" >Back to Home</NavLink>                        </p>
           </div>
            <Footer />
        </div>

    )

}

export default NotFound
