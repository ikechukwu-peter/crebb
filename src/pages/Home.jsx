import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar  from './Navbar';
import Footer from './Footer';
import  '../styles/home.css';

function Home() {
   const activeStyle = { color: '#009688' };
   return (
        <div>
            <Navbar />
               <div className="content">
               <h1>BOOK A SESSION</h1>
               <p> Book a  session with our therapists today, for a life transforming encounter. <br />
                  No one remained the same after they did!!!
               </p>
               <div>
               <NavLink exact to="/book-a-session" activeStyle={activeStyle}>                  
               <button className="cta" >
                      <span></span>
                  BOOK NOW
              </button>  
               </NavLink>
             
             </div>

           
           </div>
         
           <Footer />
      </div>
        
      )
  
}

export default Home
