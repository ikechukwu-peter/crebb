import React from 'react'
import Navbar  from './Navbar';
import Footer from './Footer';
import  '../styles/home.css';

function Home() {
    return (
        <div className= "banner">
            <Navbar />
               <div className="content">
               <h1>BOOK A SESSION</h1>
               <p> Book a  session with our therapists today, for a life transforming encounter. <br />
                  No one remained the same after they did!!!
               </p>
               <div>
                  <button>
                      <span></span>
                  BOOK NOW
              </button>               
             </div>

           
           </div>
         
           <Footer />
      </div>
        
      )
  
}

export default Home
