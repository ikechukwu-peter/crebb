import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaAlignCenter } from 'react-icons/fa'
import '../styles/navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState(false)
    const [clicked, setClicked] = useState('')

    const toggler = () => {
        console.log(toggle)
        setToggle(!toggle);
    };

     const handleClick = (e) => {
         toggler()
     };
   



    const activeStyle = { color: '#009688' };

    return (
        // Authenticated Link
        //  <div>
        //<div className="menu-bar " onClick={toggler}><FaAlignCenter /></div>
        // <div className="navbar">
        //     <strong className="logo">Crebb</strong>
        //     <ul>
        //         <li>  
        //              <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>

        //         </li>
        //          <li>
        //          <NavLink exact to="/contact-us" activeStyle={activeStyle}>Contact Us</NavLink>

        //          </li>
        //          <li>
        //          <NavLink exact to="/see-all-sessions" activeStyle={activeStyle}>Bookings</NavLink>

        //          </li>
        //         <li>
        //         <NavLink exact to="/book-a-session" activeStyle={activeStyle}>Book</NavLink>

        //         </li>
        //         <li>   <NavLink exact to="/login" activeStyle={activeStyle}>Log Out</NavLink>

        //         </li>
        //      </ul>
        // </div>
        //</div>

        //Guest Link
        <div>
            <div className="menu-bar " onClick={toggler}><FaAlignCenter /></div>
            <div className="navbar">
                <strong className="logo">Crebb</strong>


                <ul className={toggle ? "nav-links" : "open"} >
                    <li>
                        <NavLink exact to="/" activeStyle={activeStyle} onClick={toggler}>Home</NavLink>

                    </li>
                    <li onClick={handleClick}>
                        <NavLink exact to="/contact-us" activeStyle={activeStyle} >Contact Us</NavLink>

                    </li>
                    <li onClick={handleClick}>   <NavLink exact to="/login" activeStyle={activeStyle}>Login</NavLink>

                    </li>
                    <li onClick={handleClick}>
                        <NavLink exact to="/register" activeStyle={activeStyle}>Sign Up</NavLink>

                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
