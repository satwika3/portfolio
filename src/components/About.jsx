import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <p>
            I am a Computer Science undergraduate with a strong interest in building scalable web applications and secure systems. I enjoy solving complex problems using clean and efficient code.
          </p>
          <p>
            My focus areas include Full Stack Development, Cloud Technologies, and Cybersecurity. I am always eager to learn new technologies and apply them to real-world challenges, aiming to create software that is both highly functional and secure.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
