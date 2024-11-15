import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import NoPage from './components/NoPage';


function App() {

  return (

    <Router>
      <div>

        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
