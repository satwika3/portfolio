import React from 'react';
import './Certifications.css';

const certificationsData = [
  {
    name: "Azure AI Engineer Associate",
    url: "https://learn.microsoft.com/en-us/users/nakkasatwika-4172/credentials/70e87e67d537a56e?ref=https%3A%2F%2Fwww.overleaf.com%2F"
  },
  {
    name: "Oracle Cloud Infrastructure Certified Architect Associate",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=18F031489994831BE42D68551055F410C5C2EEC04A1C41EB56032BB80B2A15E9"
  },
  {
    name: "Multicloud Network Associate",
    url: "http://credly.com/badges/7e44cbc8-6056-40d6-85dc-b686a2a8f5f6/public_url"
  },
  {
    name: "Azure Fundamentals AZ-900",
    url: "https://www.credly.com/badges/603c8fee-cac2-4086-95e1-7c263f0c9d2b/public_url"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-list">
          {certificationsData.map((cert, index) => (
            <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="cert-card">
              <span className="cert-icon">🏆</span>
              <p className="cert-name">{cert.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
