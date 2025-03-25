import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: "System Engineer",
      company: "Tata Consultancy Services",
      location: "Hyderabad",
      period: "Jun 2022 - Jul 2023",
      responsibilities: [
        "Led the design and implementation of high-performance systems serving 10k+ daily active users",
        "Architected and deployed microservices using Docker containers orchestrated with Kubernetes",
        "Optimized system performance, reducing latency by 45% and improving throughput by 60%",
        "Implemented fault-tolerant systems with automated failover mechanisms, achieving 99.99% uptime",
        "Designed and implemented data pipelines using Kafka for real-time event processing",
        "Created comprehensive monitoring and alerting systems using Prometheus and Grafana",
        "Participated in technical design reviews for critical system components and fixed issues with debugging alongside with them",
        "Collaborated with cross-functional teams to define system requirements and architecture and actively participated in Agile/scrum meetings on daily basis"
      ]
    },
    {
      title: "Pega UAP Graduate (Apprenticeship)",
      company: "",
      location: "",
      period: "Jan 2021 - Jan 2022",
      responsibilities: [
        "Gained hands-on experience with Pega Platform development under mentorship of senior developers",
        "Assisted in configuring Case Types, Flows, and UI components for enterprise applications",
        "Participated in testing and debugging of Pega applications"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>{exp.title}</h3>
                <h4>{exp.company} {exp.location && `| ${exp.location}`}</h4>
                <p className="period">{exp.period}</p>
                <ul className="responsibilities">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
