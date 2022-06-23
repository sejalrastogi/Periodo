import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
// import HeroSection from './components/HeroSection';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Services from './components/pages/Services';
import Doctors from './components/pages/Doctors';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* <HeroSection /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
