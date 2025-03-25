import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Enhancing Diabetes Prediction with Big Data Analytics",
      type: "Academic Project",
      description: "A big data analytics project focused on diabetes prediction using advanced data processing techniques.",
      points: [
        "Designed and implemented a big data architecture using PySpark, HDFS, and Hive for diabetes prediction",
        "Created data processing pipelines to handle medical datasets with multiple variables including glucose levels, blood pressure, and BMI",
        "Implemented data transformation and feature engineering processes for machine learning model inputs",
        "Utilized Amazon EMR and S3 for scalable data processing and storage in a distributed environment",
        "Applied statistical analysis to identify correlations between medical factors and diabetes outcomes",
        "Achieved 92% accuracy in predicting diabetes risk factors through optimized data processing"
      ],
      technologies: ["PySpark", "HDFS", "Hive", "Amazon EMR", "S3", "Machine Learning"]
    },
    {
      title: "Distributed Database Design for Supermarket Retail Stores",
      type: "Academic Project",
      description: "A distributed database system designed for high-volume retail operations.",
      points: [
        "Designed a distributed database system capable of handling 50 operations per second for 300,000 users",
        "Implemented horizontal fragmentation using Kafka topics for data partitioning by location",
        "Utilized Cassandra for high availability and partition tolerance in a distributed environment",
        "Applied CAP theorem principles to optimize for availability and partition tolerance",
        "Achieved 99.9% system availability while maintaining data consistency across distributed nodes"
      ],
      technologies: ["Kafka", "Cassandra", "Distributed Systems", "CAP Theorem"]
    },
    {
      title: "High-Performance Message Processing System",
      type: "Academic Project",
      description: "A scalable system for processing high volumes of messages in real-time.",
      points: [
        "Developed a scalable message processing system capable of handling 10,000+ messages per second",
        "Implemented a microservices architecture with service discovery and load balancing",
        "Created a fault-tolerant design with circuit breakers and retry mechanisms",
        "Deployed the system on Kubernetes with auto-scaling capabilities",
        "Implemented comprehensive monitoring and alerting for system health and performance"
      ],
      technologies: ["Microservices", "Kubernetes", "Load Balancing", "Circuit Breakers", "Monitoring"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-content">
                <h3>{project.title}</h3>
                <h4>{project.type}</h4>
                <p className="project-description">{project.description}</p>
                <ul className="project-points">
                  {project.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
