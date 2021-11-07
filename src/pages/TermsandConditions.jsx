import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/home.css';

function TermsandCondition() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <h1>Terms & Condition</h1>
                <div>
                    <ul>
                        <li>
                            You shall only be allowed to use this website to book an appointment.
                        </li>
                        <li>
                            If you are found trying to gain unauthorized access or
                             involved in shady deals within the website, you shall be kicked out.
                        </li>

                    </ul>
                </div>

            </div>

            <Footer />
        </div>

    )

}

export default TermsandCondition
