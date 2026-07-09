import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any opportunities or just to say hi!</p>
            
            <div className="contact-details">
              <a href="mailto:2300030465cse1@gmail.com" className="info-item">
                <FaEnvelope className="info-icon" />
                <span>2300030465cse1@gmail.com</span>
              </a>
              <a href="tel:+918500049859" className="info-item">
                <FaPhone className="info-icon" />
                <span>+91 8500049859</span>
              </a>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Mangalagiri,+Andhra+Pradesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="info-item"
              >
                <FaMapMarkerAlt className="info-icon" />
                <span>Mangalagiri, Andhra Pradesh</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
