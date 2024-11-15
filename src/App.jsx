import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import HomePage from './pages/HomePage';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
// import AdminPage from './pages/AdminPage';
// import CharityProfilePage from './pages/CharityProfilePage';
// import DonorPage from './pages/DonorPage';
// import NavBar from './components/NavBar';
// import UserAuth from './components/Authentication/UserAuth';
// import DonorDashboard from './components/Donor/DonorDashboard';
import Footer from './components/Footer';
// // import LandingPage from './components/LandingPage';
// import DonateForHer from './components/Admin/PaymentAuth/TransactionPage';
// import ContactUs from './components/ContactUs';
import NoPage from './components/NoPage';
// import './index.css';

function App() {

  return (

    <Router>
      <div>

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          {/* <Route path="/home" element={<HomePage />} /> */}
          {/* <Route path="/admin" element={<AdminPage />} />
          <Route path="/charities" element={<CharityProfilePage />} />
          <Route path="/donor" element={<DonorPage />} />
          <Route path="/donate" element={<DonateForHer />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<UserAuth />} /> */}
          <Route path="*" element={<NoPage />} />
        </Routes>

        {/* <UserAuth /> */}
        {/* <LandingPage /> */}
        {/* Uncomment to include these components */}
        {/* <DonorDashboard /> */}
        {/* <DonateForHer /> */}
      </div>
      <Footer />
    </Router>
  );
}

export default App;