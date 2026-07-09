import React from 'react';
import './Skills.css';

const skillsData = [
  {
    category: "Specialization",
    skills: ["CyberSecurity"]
  },
  {
    category: "Languages",
    skills: ["Java", "Python", "C", "Data Base"]
  },
  {
    category: "Technologies",
    skills: ["Spring Boot", "React.js", "MySQL"]
  },
  {
    category: "Tools",
    skills: ["Git", "VS Code", "Eclipse"]
  },
  {
    category: "Core Areas",
    skills: ["OOP", "Full Stack Development", "DBMS"]
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
