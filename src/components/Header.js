import React, { useState } from 'react';
import '../styles/Header.css';
import pegaLogo from '../assets/pega-certification-logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <div className="name-with-logo">
            <h1>Sudheer Reddy Narra</h1>
            <img src={pegaLogo} alt="Pega Certification" className="pega-logo" />
          </div>
        </div>
        <div className={`menu-btn ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="menu-btn__burger"></div>
        </div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li><a href="#home" onClick={() => setIsOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#experience" onClick={() => setIsOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setIsOpen(false)}>Education</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
