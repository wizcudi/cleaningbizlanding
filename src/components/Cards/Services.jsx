import React from 'react'
import './Services.css'

export default function Services({title, description, linkText}) {
    return (
        <div className='services-card'>
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <a className='services-card-a'>{linkText}</a>
            </div>
        </div>
    )
}
