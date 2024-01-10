import React from 'react'
import ContactSection from '../component/contact-section/ContactSection'
import './Contact.css';

const location = {
  address: 'NORTH NAZIMABAD، D-9, BLOCK-I, Block I North Nazimabad Town, Karachi, Karachi City, Sindh 74700',
  lat:24.948741,
  lng: 67.04497,
} // our location object from earlier

function Contact(){
    return (
    <div className="container">
    <ContactSection/>
    </div>
    )
}

export default Contact;