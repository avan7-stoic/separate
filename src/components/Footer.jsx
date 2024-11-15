import React from 'react';
import '/src/App.css';

const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-column">
          <h4>About Us</h4>
          <a href="#" className="footer-link">Our Story</a>
          <a href="#" className="footer-link">Our Team</a>
          <a href="#" className="footer-link">Careers</a>
          <a href="#" className="footer-link">Contact Us</a>
        </div>
        <div className="footer-column">
          <h4>Our Work</h4>
          <a href="#" className="footer-link">Current Projects</a>
          <a href="#" className="footer-link">Our Impact</a>
          <a href="#" className="footer-link">Partners</a>
          <a href="#" className="footer-link">Resources</a>
        </div>
        <div className="footer-column">
          <h4>Get Involved</h4>
          <a href="#" className="footer-link">Donate</a>
          <a href="#" className="footer-link">Volunteer</a>
          <a href="#" className="footer-link">Fundraise</a>
          <a href="#" className="footer-link">Corporate Partnerships</a>
        </div>
        <div className="footer-column">
          <h4>Connect With Us</h4>
          <a href="#" className="footer-link">Facebook</a>
          <a href="#" className="footer-link">Twitter</a>
          <a href="#" className="footer-link">Instagram</a>
          <a href="#" className="footer-link">LinkedIn</a>
        </div>
      </footer>

    </>
  );
};

export default Footer;

