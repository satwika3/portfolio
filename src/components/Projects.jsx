import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './Projects.css';

const projectsData = [
  {
    title: "Cozy Stay – Hotel Booking Application",
    description: "Full-stack application built using React, Spring Boot, and MySQL with secure authentication and booking management.",
    tags: ["React", "Spring Boot", "MySQL", "Authentication"],
    github: "https://github.com/satwika3"
  },
  {
    title: "Offensive AI – Adaptive Password & Social Engineering Simulator",
    description: "Cybersecurity training tool simulating password attacks and phishing campaigns using Python and Flask.",
    tags: ["Python", "Flask", "Cybersecurity", "Machine Learning"],
    github: "https://github.com/satwika3"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section bg-light">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="project-footer">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
