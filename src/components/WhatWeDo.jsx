import React from 'react'
import './WhatWeDo.css'
import Services from './Cards/Services.jsx'

export default function WhatWeDo() {

    const servicesData = [
        {
            title: "Full Cleaning",
            description: "Experience the ultimate cleanliness with our comprehensive full cleaning service.",
            linkText: "View More"
        },
        {
            title: "Window Cleaning",
            description: "Let the sunlight in with our professional window cleaning services.",
            linkText: "View More",
        },
        {
            title: "Furniture Cleaning",
            description: "Revive the beauty of your furniture with our meticulous furniture cleaning service.",
            linkText: "View More",
        },
        {
            title: "Kitchen Cleaning",
            description: "Say goodbye to grease and grime with our thorough kitchen cleaning service.",
            linkText: "View More",
        },
        {
            title: "Pressure Washing",
            description: "High-powered cleaning to remove stubborn dirt and grime from exterior surfaces.",
            linkText: "View More",
        },
        {
            title: "Office Cleaning",
            description: "Maintain a clean and organized workspace with our professional office cleaning service.",
            linkText: "View More",
        },
    ]

    return (
        <div className='what-we-do'>
            <div className='what-we-do-heading'>
                <p>Our Services</p>
                <h2>What We Do</h2>
            </div>
            <div className='what-we-do-cards'>
                {servicesData.map((service,index)=>(
                    <Services 
                        key={index}
                        title={service.title}
                        description={service.description}
                        linkText={service.linkText}
                    />
                ))}
            </div>
        </div>
  )
}
