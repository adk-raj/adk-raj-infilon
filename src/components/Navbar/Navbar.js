import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo" >Whitespace</div>
      <ul className="nav-links">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/">Solutions</Link></li>
        <li><Link to="/">Resources</Link></li>
        <li><Link to="/">Pricing</Link></li>
        <li><button className="login-button">Login</button></li>
        <li><button className="try-button">Try Whitespace Free</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
