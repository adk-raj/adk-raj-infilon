import React from 'react';
import { Button } from 'antd';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-header">
          <h1 className="footer-title">Try Whitepace today</h1>
          <p className="footer-subtitle">
            Get started for free. <br />
            Add your whole team as your needs grow.
          </p>
          <Button type="primary" className="footer-button">
            Try Today for Free
          </Button>
          <p className="footer-contact">
            On a big team? <a href="#contact">Contact sales</a>
          </p>
        </div>
        <div className="footer-icons">
          <i className="icon apple-icon">apple logo</i>
          <i className="icon android-icon">Android</i>
          <i className="icon windows-icon">Windows</i>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-brand">
        <h4 className="footer-section-title">Whitepace</h4>
          <p>was created for the</p>
            <p>dreamers who build and</p>
            <p> run. It's inspiring a better</p>
            <p>workspace around the world.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4 className="footer-section-title">Product</h4>
            <p>Overview</p>
            <p>Pricing</p>
            <p>Customer Stories</p>
          </div>
          <div>
            <h4 className="footer-section-title">Resources</h4>
            <p>Blog</p>
            <p>Guides & Tutorials</p>
            <p>Help Center</p>
          </div>
          <div>
            <h4 className="footer-section-title">Company</h4>
            <p>About Us</p>
            <p>Careers</p>
            <p>Media Kit</p>
          </div>
        </div>
        <div className="footer-legal">
          <h4 className="footer-section-title">Try It Today</h4>
          <p>2024 Whitepace LLC</p>
          <a href="#privacy">Terms & Privacy</a> |{' '}
          <a href="#security">Security</a> | <a href="#status">Status</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
