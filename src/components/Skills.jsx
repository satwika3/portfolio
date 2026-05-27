import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Languages",
    skills: ["Java", "C", "Python", "SQL", "HTML", "CSS"]
  },
  {
    category: "Technologies",
    skills: ["Spring Boot", "REST APIs", "Docker", "Jenkins", "Azure"]
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "MySQL", "MongoDB"]
  },
  {
    category: "Core Areas",
    skills: ["DSA", "OOP", "Full Stack Development", "CI/CD", "Cybersecurity"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 className="skill-category">{skillGroup.category}</h3>
              <ul className="skill-list">
                {skillGroup.skills.map((skill, i) => (
                  <li key={i} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
