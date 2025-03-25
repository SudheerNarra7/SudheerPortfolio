import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate Software Engineer with expertise in distributed systems, 
              microservices architecture, and high-performance applications. With experience 
              at Tata Consultancy Services and a strong educational background in Computer Science, 
              I specialize in designing and implementing scalable, fault-tolerant systems.
            </p>
            <p>
              Currently pursuing my Master's in Computer Science at the University of North Texas, 
              I am constantly expanding my knowledge in advanced computing concepts and applying them 
              to real-world problems. I am particularly interested in cloud computing, distributed 
              databases, and system optimization.
            </p>
            <p>
              My technical skills include proficiency in multiple programming languages, DevOps tools, 
              and cloud technologies. I am committed to creating efficient, reliable, and high-performance 
              software solutions that meet business needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
