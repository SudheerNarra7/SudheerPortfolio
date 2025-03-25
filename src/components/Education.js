import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educations = [
    {
      institution: "University of North Texas",
      degree: "M.S. in Computer Science",
      period: "Aug 2023 - May 2025",
      gpa: "GPA: 4.0",
      courses: "Relevant Coursework: Distributed Systems, Advanced Algorithms, System Design, Cloud Computing"
    },
    {
      institution: "KL University",
      degree: "B.Tech in Computer Science",
      period: "Jun 2018 - May 2022",
      gpa: "GPA: 8.37",
      courses: "Minor: Big Data Analytics and Data Science"
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-container">
          {educations.map((edu, index) => (
            <div key={index} className="education-item">
              <h3>{edu.institution}</h3>
              <h4>{edu.degree}</h4>
              <p className="period">{edu.period}</p>
              <p className="gpa">{edu.gpa}</p>
              <p className="courses">{edu.courses}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
