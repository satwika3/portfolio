import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-wrapper">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to me for any opportunities or just to say hi!</p>
            <div className="info-item">
              <FaEnvelope className="info-icon" />
              <a href="mailto:2300030465cse1@gmail.com">2300030465cse1@gmail.com</a>
            </div>
            <div className="info-item">
              <FaPhone className="info-icon" />
              <a href="tel:+918500049859">+91 8500049859</a>
            </div>
            <div className="info-item">
              <FaMapMarkerAlt className="info-icon" />
              <span>Mangalagiri, Andhra Pradesh</span>
            </div>
          </div>
          <div className="contact-form-container">
            {submitted ? (
              <div className="success-message">
                <h4>Thank you for reaching out!</h4>
                <p>I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" required placeholder="Your Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" required placeholder="Your Email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" rows="5" required placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
