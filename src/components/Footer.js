import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h3>Sudheer Reddy Narra</h3>
            <p>Software Engineer & System Architect</p>
          </div>
          <div className="footer-links">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <a href="https://github.com/SudheerNarra7" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sudheer-reddy-496319205" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} Sudheer Reddy Narra. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
