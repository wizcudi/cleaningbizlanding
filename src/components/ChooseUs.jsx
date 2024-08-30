import React from 'react'
import './ChooseUs.css'
import Cleaners from '../assets/cleaners.avif'


export default function ChooseUs() {
    return (
        <div className='choose-us-section'>
            <div className='choose-us'>
                <div className='choose-us-content'>
                    <h2>
                        Why You Should Choose Us
                    </h2>
                    <p>
                        We understand the importance of a clean and healthy environment. 
                        Whether it's your home, office. or any other space, maintaining 
                        cleanliness is vital for your well-being and productivity. That's 
                        why we offer a range of professional cleaning services tailored to 
                        meet your specific needs.
                    </p>
                    <ul>
                        <li>
                            Professional Floor & Carpet Cleaning
                        </li>
                        <li>
                            Profesional Full Cleaning 
                        </li>
                        <li>
                            Fast Work 
                        </li>
                        <li>
                            Flexible Work Hour for You
                        </li>
                    </ul>
                </div>
                <div className='choose-us-call'>
                    <img src={Cleaners} />
                    <p>
                        Leave the mess to our experts - Schedule Cleaning Appointment Now!
                    </p>
                </div>
            </div>
        </div>
    )
}
