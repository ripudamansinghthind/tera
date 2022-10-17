import React from 'react';
import Logo from '../resources/Logo.JPG';
import '../css/Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar" id="navbar">
          <div className="nav-content">
          <img src={Logo} className="logo-img" alt='Logo' />
            <ul className="nav-items">
                <li className="nav-item">
                  <div className="clickyButton">Home
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">About
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">Market
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">Services
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">Projects
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">Testimonials
                  </div>
                </li>
                <li className="resumeButton">
                  <div className="clickyButton">Free Consultation
                  </div>
                </li>
              </ul>
            </div>
        </nav>
    );
}
    
export default Navbar;