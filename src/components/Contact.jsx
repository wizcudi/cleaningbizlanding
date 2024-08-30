import React from 'react'
import './Contact.css'
import clean from '../assets/housecleaner.jpg'
import Form from "./ContactForm.jsx"

export default function Contact() {
    return (
        <div className='contact'>
            <div className='contact-bio'>
                <p className='contact-bio-head-p'>Contact Us</p>
                <h2 className='contact-bio-head-h2'>
                    Contact Us Today -Let Us Assist You In Attaining A Tidier Home!
                </h2>
                <p className='contact-p'>
                    Trust us to handle the dirt, so you can focus on what matters most
                </p>
                <img className='contact-img' src={clean} />
            </div>
            <Form />
        </div>
    )
}
