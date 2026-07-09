import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-glow"></div>
      <div className="hero-glow-2"></div>
      <div className="container hero-container">
        <p className="hero-intro">Hi, my name is</p>
        <h1 className="hero-name">Nakka Satwika</h1>
        <h2 className="hero-title">Full Stack Developer &amp; Cybersecurity Enthusiast</h2>
        <p className="hero-tagline">
          I design and build highly secure, robust, and scalable full-stack applications with beautiful user experiences.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href={`${import.meta.env.BASE_URL}resume.pdf?v=2`} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Download Resume</a>
        </div>
        <div className="hero-socials">
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
      </div>
    </section>
  );
};

export default Hero;
