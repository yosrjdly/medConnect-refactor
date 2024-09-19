import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './compoonents/HomePage.jsx';
import DoctorLandingPage from './compoonents/DoctorLandingPage.jsx';
import DoctorRegistration from './compoonents/DoctorRegistration.jsx';

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/doctor-landing-page" element={<DoctorLandingPage/>} />
          <Route path="/doctor-registration" element={<DoctorRegistration/>} />


        </Routes>
      </Router>
 
  );
}

export default App;