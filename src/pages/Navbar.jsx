import React from 'react'
import { NavLink } from "react-router-dom";
import '../styles/navbar.css';

function Navbar() {
    const activeStyle = {color: '#009688' };  
 
    return (
        // Authenticated Link
        <div className="navbar">
            <strong className="logo">Crebb</strong>
            <ul>
                <li>  
                     <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
                   
                </li>
                 <li>
                 <NavLink exact to="/contact-us" activeStyle={activeStyle}>Contact Us</NavLink>
                                    
                 </li>
                 <li>
                 <NavLink exact to="/see-all-sessions" activeStyle={activeStyle}>Bookings</NavLink>
                                    
                 </li>
                <li>
                <NavLink exact to="/book-a-session" activeStyle={activeStyle}>Book</NavLink>
                   
                </li>
                <li>   <NavLink exact to="/login" activeStyle={activeStyle}>Log Out</NavLink>
                   
                </li>
             </ul>
        </div>

        //Guest Link

    //     <div className="navbar">
    //     <strong className="logo">Crebb</strong>
    //     <ul>
    //         <li>  
    //              <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
               
    //         </li>
    //         <li>
    //         <NavLink exact to="/contact-us" activeStyle={activeStyle}>Contact Us</NavLink>
                                
    //         </li>            
    //         <li>   <NavLink exact to="/login" activeStyle={activeStyle}>Login</NavLink>
               
    //         </li>
    //         <li>
    //         <NavLink exact to="/register" activeStyle={activeStyle}>Sign Up</NavLink>
                                
    //         </li>
    //     </ul>
    // </div>
    )
}

export default Navbar
