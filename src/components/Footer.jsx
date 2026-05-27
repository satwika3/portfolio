import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-socials">
          <a href="https://github.com/satwika3" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/satwika-nakka-a55710328/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:2300030465cse1@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
        <p className="footer-text">Designed &amp; Built by Nakka Satwika</p>
      </div>
    </footer>
  );
};

export default Footer;
