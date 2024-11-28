import React from 'react';
import './HeroSection.css';
import heroImage from '../../assets/images/whiteSpaceHeader.png'; 

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="text-content">
          <h1>Get More Done with Whitespace</h1>
          <p>Project management software that enables your team to collaborate, plan, and manage everyday tasks.</p>
          <button className="cta-button">Try Whitespace Free</button>
        </div>
        <div className="image-content">
          <img src={heroImage} alt="Business Illustration" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
