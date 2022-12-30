import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import Resume from '../Icons/Resume.pdf'
import Logo from '../Icons/Logo.png';

import '../css/Navbar.css'

const Navbar = (props) => {
  return (
    <nav className="navbar" id="navbar">
          <div className="nav-content">
          <img src={Logo} className="logo-img" alt='Logo' />
            <ul className="nav-items">
                <li className="nav-item">
                  <div className="clickyButton">Experience
                  </div>
                </li>
                <li className="nav-item">
                  <div className="clickyButton">Projects
                  </div>
                </li>
                <li className="resumeButton">
                    <a href={ Resume } target="_blank" rel="noopener noreferrer">
                  <div className="clickyButton">Resume.pdf
                  </div></a>
                </li>
              </ul>
            </div>
        </nav>
    );
}
    
export default Navbar;