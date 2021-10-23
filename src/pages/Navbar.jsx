import React from 'react'
import  '../styles/navbar.css';

function Navbar() {
    return (
             <div className="navbar">
            <strong className="logo">Crebb</strong>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Book a session</a></li>
                <li><a href="#">Sign Up</a></li>
                <li><a href="#">Login</a></li>
            </ul>       
         </div>           
    )
}

export default Navbar
