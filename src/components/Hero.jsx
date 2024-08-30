import React from 'react'
import './Hero.css'
import HouseClean from '../assets/houseclean.avif'

export default function Hero() {
   


    return (
        <div className="hero" style={{ backgroundImage: `url(${HouseClean})` }}>
            <div className="hero-content">
                <h1>
                    Let Us Handle the Mess - We'll Bring a 
                    Radiant Glow to Your Living Space
                </h1>
                <p>
                    Take a step towards a cleaner, fresher, and 
                    more inviting space with our top-notch 
                    cleaning services.
                </p>
                <div>
                    <button className="cta-button">Book an Appointment</button>
                </div>
            </div>
        </div>
    )
}
