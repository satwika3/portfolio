import React from 'react';
import './Certifications.css';

const certificationsData = [
  "Oracle Cloud Infrastructure Certified Architect Associate",
  "Multicloud Network Associate",
  "Azure Fundamentals AZ-900"
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certificationsData.map((cert, index) => (
            <div key={index} className="cert-card">
              <span className="cert-icon">🏆</span>
              <p className="cert-name">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
