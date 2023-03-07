import React from 'react'
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form-container">
    <div className="contact-form-page-title">
        <h1>Contact Us</h1>
    </div>
        <form className="contact-form">
            <input type="text" name="name" className="contact-entry" placeholder="Your Name" required></input>
        
            <input type="email" name="email" className="contact-entry" placeholder="Your Email" required></input>
        
            <textarea name="message" placeholder="Message" className="contact-entry" required rows="5"></textarea>
        
            <input type="submit" className="submit-button" value="Send Message &#128512;"></input>
        </form>
    
    </div>
  )
}

export default ContactForm