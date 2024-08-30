import React, { useState } from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {

    const [companyFootOpen, setCompanyFootOpen] = useState(false)

    const toggleFootCompanyMenu = () => {
        setCompanyFootOpen(!companyFootOpen)
    }

    return (
        <div className='footer'>
            <div className='footer-call'>
                <h1 className='footer-call-h1'>
                    Revitalize Your Area with Our Dedicated 
                    <span> Cleaning Experts</span>
                </h1>
                <button>
                    Book an Appointment
                </button>
            </div>
            <div className='footer-nav'>
                <div className='footer-logo'><p>Cleaning</p></div>
                <ul className='footer-ul'>
                    <li onClick={toggleFootCompanyMenu}>
                        Company
                        <ul className={`footer-company-ul ${companyFootOpen ? 'show':''} `}>
                            <li>About Us</li>
                            <li>Why Choose Us</li>
                            <li>How We Work</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                            <li>FAQ</li>
                        </ul>
                    </li>
                    <li>
                        Services
                    </li>
                    <li>
                        Pricing
                    </li>
                </ul>
                <div className='footer-banner'>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <a>4517 Washington Ave. Manchester, Kentucky 39495</a>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faPhone} />
                        <a>(252) 555-0126</a>
                    </div>
                </div>
            </div>
            <div className='footer-socials'>
                <div className='footer-socials-accounts'>
                    <a>Instagram</a>
                    <a>Facebook</a>
                    <a>Twitter</a>
                </div>
                <div>
                    <p className='footer-rights'>
                       &copy; Cleaning. All Rights Reserved 2024.
                       <br></br> Template by <span>
                        <a href='https://www.instagram.com/thankyouamour/'>thankyouamour</a>
                       </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
