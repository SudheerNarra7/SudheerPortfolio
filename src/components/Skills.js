import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: ["Java", "Python", "C++", "Go", "JavaScript"]
    },
    {
      category: "System Design",
      skills: ["Distributed Systems", "Microservices", "Service-Oriented Architecture", "High Availability", "Scalability"]
    },
    {
      category: "Technologies",
      skills: ["Kubernetes", "Docker", "Kafka", "Cassandra", "Redis", "ElasticSearch", "AWS", "Azure", "Linux"]
    },
    {
      category: "DevOps & Tools",
      skills: ["CI/CD", "GitHub Actions", "Jenkins", "Terraform", "Prometheus", "Grafana", "ELK Stack", "Git"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skill-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
