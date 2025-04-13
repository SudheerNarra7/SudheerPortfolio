import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>nsudheerreddy700@gmail.com</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>(940-704-7708)-44</p>
            </div>
            <div className="contact-item">
              <i className="fab fa-github"></i>
              <p><a href="https://github.com/SudheerNarra7" target="_blank" rel="noopener noreferrer">github.com/SudheerNarra7</a></p>
            </div>
            <div className="contact-item">
              <i className="fab fa-linkedin"></i>
              <p><a href="https://linkedin.com/in/sudheer-reddy-496319205" target="_blank" rel="noopener noreferrer">linkedin.com/in/sudheer-reddy-496319205</a></p>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Subject" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
