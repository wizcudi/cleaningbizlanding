import React, { useState } from 'react'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faBars } from '@fortawesome/free-solid-svg-icons';


export default function navbar() {
    const [hamburgerClicked, setHamburgerClicked] = useState(false)
    const [companyMenuOpen, setCompanyMenuOpen] = useState(false)

    const clickedMenu = () => {
        setHamburgerClicked(!hamburgerClicked)
    }
    const toggleCompanyMenu = () => {
        setCompanyMenuOpen(!companyMenuOpen)
    }

    return (
        <div className='navbar'>
            <div className='nav-banner'>
                <div>
                    <FontAwesomeIcon icon={faLocationDot} />
                    <a>4517 Washington Ave. Manchester, Kentucky 39495</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone} />
                    <a>(252) 555-0126</a>
                </div>
            </div>
            <div className='nav-menu'>
                <div className='nav-logo'><p>Cleaning</p></div>
                <div className={`nav-ul-btn ${hamburgerClicked ? 'show-menu' : 'nav-ul-btn'}`} >  
                    <div className='ul-logo'><p>Cleaning</p></div>
                    <ul className='nav-ul'>
                        <li onClick={toggleCompanyMenu}>
                            Company
                            <ul className={`company-ul ${companyMenuOpen ? 'show' : ''}`}>
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
                    <div className='nav-btn'>
                        <button>
                            Get in Touch
                        </button>
                    </div>
                </div>
                <div onClick={clickedMenu} className='hamburger'>
                    <FontAwesomeIcon className='faBar' icon={faBars} />
                </div>
            </div>
        </div>
    )
}
