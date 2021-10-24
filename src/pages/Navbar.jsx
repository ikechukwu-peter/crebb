import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import { useState } from 'react';

function Navbar() {
    const activeStyle = { color: "#009688" };
   
    
        const [name, setName] = useState("none");
    
    const handleMenu = () => {
       setName("grid");
    };

  return (
    // Authenticated Link
    // <div className="navbar">
    //     <strong className="logo">Crebb</strong>
    //     <ul>
    //         <li>
    //              <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
    //
    //         </li>
    //          <li>
    //          <NavLink exact to="/contact-us" activeStyle={activeStyle}>Contact Us</NavLink>
    //
    //          </li>
    //          <li>
    //          <NavLink exact to="/see-all-session" activeStyle={activeStyle}>See Your Sessions</NavLink>
    //
    //          </li>
    //         <li>
    //         <NavLink exact to="/book-a-session" activeStyle={activeStyle}>Book A Session</NavLink>
    //
    //         </li>
    //         <li>   <NavLink exact to="/login" activeStyle={activeStyle}>Log Out</NavLink>
    //
    //         </li>
    //      </ul>
    // </div>

    //Guest Link

    <div className="navbar">
      <div className="mobile">
        <strong className="logo">Crebb</strong>
        {/* HAMBURGER MENU >>>*/}{" "}
        <img
          src="src\assets\bars-solid.svg"
          alt=""
          className="img"
            onClick={handleMenu}
        />
      </div>

      <ul id="unordered" style={{display:name}}>
        <li>
          <NavLink exact to="/" activeStyle={activeStyle}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/contact-us" activeStyle={activeStyle}>
            Contact Us
          </NavLink>
        </li>
        <li>
          {" "}
          <NavLink exact to="/login" activeStyle={activeStyle}>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/register" activeStyle={activeStyle}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
