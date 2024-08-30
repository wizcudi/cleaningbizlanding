import React, {useState} from 'react'
import './ContactForm.css'

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        message: '' 
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here you would typically send the data to your server
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            service: '',
            message: '' 
        })
    }


    return (
        <form className='contact-form' onSubmit={handleSubmit}>
            
            <div className='user-info'>
                <div>
                    <label htmlFor='firstName'></label>
                    <input 
                        placeholder='First name'
                        id='firstName'
                        name='firstName'
                        type='text'
                        onChange={handleChange}
                        value={formData.firstName}
                    />
                </div>

                <div>
                    <label htmlFor='lastName'></label>
                    <input 
                        placeholder='Last name' 
                        id='lastName'
                        name='lastName'
                        type='text'
                        onChange={handleChange}
                        value={formData.lastName}
                    />
                </div>
            </div>

            <div className='user-info'>
                <div>
                    <label htmlFor='phone'></label>
                    <input 
                        placeholder='Phone number' 
                        id='phone'
                        name='phone'
                        type='tel'
                        onChange={handleChange}
                        value={formData.phone}
                    />
                </div>

                <div>
                    <label htmlFor='email'></label>
                    <input 
                        placeholder='Email' 
                        id='email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={formData.email}
                    />
                </div>
            </div>

            <div className='form-services'>
                <label htmlFor='service'></label>
                <select
                    id='service'
                    name='service'
                    onChange={handleChange}
                    value={formData.service}
                >
                    <option value=''>Select a service</option>
                    <option value="full-cleaning">Full Cleaning</option>
                    <option value="window-cleaning">Window Cleaning</option>
                    <option value="furniture-cleaning">Furniture Cleaning</option>
                    <option value="kitchen-cleaning">Kitchen Cleaning</option>
                    <option value="pressure-washing">Pressure Washing</option>
                    <option value="office-cleaning">Office Cleaning</option>
                </select>
            </div>

            <div className='form-message'>
                <label htmlFor='message'></label>
                <textarea 
                    placeholder='Message'
                    id='message'
                    name='message'
                    onChange={handleChange}
                    value={formData.message}
                ></textarea>
            </div>

            <button className='form-btn' type='submit'>Submit</button>
        
        </form>
    )
}
