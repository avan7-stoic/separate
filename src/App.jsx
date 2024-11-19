import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import AuthPage from './components/UserAuth';
import DonateForHer from './components/TransactionPage';
import Stories from './components/Stories';
import Donor from './components/Donor';
import Charities from './components/Charities';
import Administrator from './components/Admin';
import AdminDashboard from './components/AdminDashboard';
import Beneficiaries from './components/Beneficiary';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import NoPage from './components/NoPage';
import CharityDashboard from './components/CharityDashboard';



function App() {

  return (

    <Router>
      <div className="App">

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/donate" element={<DonateForHer />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/charities" element={<Charities />} />
          <Route path="/charity-dashboard" element={<CharityDashboard />} />
          <Route path="/dashboard" element={<Administrator />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/beneficiaries" element={<Beneficiaries />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
