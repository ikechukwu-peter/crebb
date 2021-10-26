import React, { useState } from 'react'
import { NavLink } from "react-router-dom";
import { FaAlignCenter } from 'react-icons/fa'
import logo from '../assets/crebb.png'
import '../styles/navbar.css';

function Navbar() {
    const [toggle, setToggle] = useState("false")

    const toggler = () => {
        setToggle(!toggle);
    };

    const activeStyle = { color: '#009688' };

    return (
        // Authenticated Link
        // <div>
        //     <div className="menu-bar " onClick={toggler}><FaAlignCenter /></div>
        //     <div className="navbar">
        //         <NavLink  exact to="/" activeStyle={activeStyle}>
        //             <img className="logo" src={logo} alt="Crebb logo" title="Crebb logo" />
        //         </NavLink>

        //         <ul className={toggle ? "nav-links" : "open"}>
        //             <li onClick={toggler}>
        //                 <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>

        //             </li>
        //             <li onClick={toggler}>
        //                 <NavLink exact to="/contact-us" activeStyle={activeStyle}>Contact Us</NavLink>

        //             </li>
        //             <li onClick={toggler}>
        //                 <NavLink exact to="/see-all-sessions" activeStyle={activeStyle}>Bookings</NavLink>

        //             </li>
        //             <li onClick={toggler}>
        //                 <NavLink exact to="/book-a-session" activeStyle={activeStyle}>Book</NavLink>

        //             </li>
        //             <li onClick={toggler}>   <NavLink exact to="/login" activeStyle={activeStyle}>Log Out</NavLink>

        //             </li>
        //         </ul>
        //     </div>
        // </div>

        //Guest Link
        <div>
            <div className="menu-bar " onClick={toggler}><FaAlignCenter /></div>
            <div className="navbar">
                <NavLink exact to="/" activeStyle={activeStyle}>
                    <img className="logo" src={logo} alt="Crebb logo" title="Crebb logo" />
                </NavLink>
                <ul className={toggle ? "nav-links" : "open"}  >
                    <li>
                        <NavLink exact to="/" activeStyle={activeStyle} onClick={toggler}>Home</NavLink>

                    </li>
                    <li onClick={toggler}>
                        <NavLink exact to="/contact-us" activeStyle={activeStyle} >Contact Us</NavLink>

                    </li>
                    <li onClick={toggler}>   <NavLink exact to="/login" activeStyle={activeStyle} >Login</NavLink>

                    </li>
                    <li onClick={toggler}>
                        <NavLink exact to="/register" activeStyle={activeStyle}>Sign Up</NavLink>

                    </li>
                </ul>
            </div>
        </div>

    )
}

export default Navbar
