import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

import '../styles/home.css';

function PrivacyPolicy() {
    return (
        <div>
            <Navbar />
            <div className="content">
                <h1>Privacy Policy</h1>
                <div>
                <p>
                    This privacy policy ("policy") will help you understand how Crebb ("us", "we", "our") uses and
                    protects the data you provide to us when you visit and use [website] ("website", "service").
                    We reserve the right to change this policy at any given time, of which you will be promptly
                    updated. If you want to make sure that you are up to date with the latest changes, we advise
                    you to frequently visit this page.
                </p>
                <h3>
                    What User Data We Collect
                </h3>
                <p>
                    When you visit the website, we may collect the following data:
                </p>
                <ul>
                    <li>
                        Your email address.
                    </li>
                    <li>
                        Data profile regarding your online behavior on our website.
                    </li>

                </ul>
                </div>
               
                <div>
                    <h3>
                        Why We Collect Your Data

                    </h3>
                    <p>
                        We are collecting your data for just one reason:
                    </p>
                    <ul>
                        <li>
                            To use your email to give you access to our site content
                        </li>

                    </ul>
                </div>
                <div>

                    <h3>
                        Safeguarding and Securing the Data
                    </h3>
                    <p>
                        Crebb is committed to securing your data and keeping it confidential. [name] has done all in its
                        power to prevent data theft, unauthorized access, and disclosure by implementing the latest
                        technologies and software, which help us safeguard all the information we collect online.
                    </p>
                    <h3>Our Cookie Policy</h3>
                    <p>
                        We do not use cookies and have no need for it, since we only collect your email and use that to give you access to our site.
                    </p>
                </div>

            </div>

            <Footer />
        </div>

    )

}

export default PrivacyPolicy
