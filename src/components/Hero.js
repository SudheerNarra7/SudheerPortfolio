import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Sudheer Reddy Narra</h1>
          <h2>Software Engineer & System Architect</h2>
          <p>Specializing in distributed systems, microservices architecture, and high-performance applications</p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href="#projects" className="btn btn-secondary">View Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
