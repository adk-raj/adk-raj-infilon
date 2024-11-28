import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection';
import PlansSection from './components/PlansSection/PlansSection';
import Footer from './components/Footer/Footer';



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <PlansSection />
            <Footer />
          </>
        } />
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;

