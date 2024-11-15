import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '/src/App.css';
import Footer from './Footer.jsx';
//import CharityProfilePage from '../pages/CharityProfilePage.jsx';


const LandingPage = () => {
  const [impactData, setImpactData] = useState({
    totalFunds: 0,
    totalGirlsHelped: 0,
    totalCharities: 0,
  });

  useEffect(() => {
    const fetchImpactData = async () => {
      setImpactData({
        totalFunds: 100000,
        totalGirlsHelped: 10000,
        totalCharities: 50,
      });
    };

    fetchImpactData();
  }, []);

  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="logo">Tuinue Wasichana</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/charities">Charities</Link></li>
          <li><Link to="/impact">Our Impact</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <div className="auth-buttons">
          <div className="sign-in-dropdown">
            <button>Sign In</button>
            <div className="dropdown-content">
              <Link to="/auth">As Donor</Link>
              <Link to="/auth">As Admin</Link>
              <Link to="/auth">As Charity</Link>
            </div>
          </div>
          <button className="register-button"><Link to="/auth">Register</Link></button>
        </div>
      </nav>

      <div className="hero-section">
        <div className="hero-content">
          <h1>Empowering Girls</h1>
          <h2>END PERIOD POVERTY</h2>
          <p>Join us in our mission to provide menstrual hygiene products and improve sanitation facilities for school girls in Sub-Saharan Africa.</p>
          <p>Together we are able to end period poverty and lift our school going girls and give them a bright future.</p>
          <p>Your donation matters. However small , However huge we value all donations.</p>
          <div className="hero-buttons">
            <Link to="/donate" className="hero-button">Donate</Link>
            <Link to="/learn-more" className="hero-button">Learn More</Link>
          </div>
        </div>
      </div>

      <div className="impact-section">
        <h3>Our Impact</h3>
        <div className="impact-stats">
          <div className="stat">
            <h4>Total Funds Raised</h4>
            <p>${impactData.totalFunds}</p>
          </div>
          <div className="stat">
            <h4>Girls Helped</h4>
            <p>{impactData.totalGirlsHelped} girls</p>
          </div>
          <div className="stat">
            <h4>Total Charities</h4>
            <p>{impactData.totalCharities}</p>
          </div>
        </div>
        <Footer />

      </div>
    </div>
  );
};

export default LandingPage;

