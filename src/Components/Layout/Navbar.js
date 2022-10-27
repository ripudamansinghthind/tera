import React from 'react';
import Logo from '../resources/Logo.svg';
import '../css/Navbar.css'
import { motion } from 'framer-motion';

const Navbar = (props) => {
  return (
    <motion.nav className="navbar" id="navbar"
        initial={{x: -250}}
        animate={{x: 0}}>
          <div className="nav-content">
          <motion.img 
            src={Logo} 
            className="logo-img" 
            alt='Logo' 
            initial={{x: -250}}
            animate={{x: 0}}
            />
            <ul className="nav-items">
                <motion.li className="nav-item"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Services
                  </div>
                </motion.li>
                <motion.li className="nav-item"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Team
                  </div>
                </motion.li>
                <motion.li className="nav-item"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Projects
                  </div>
                </motion.li>
                <motion.li className="nav-item"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Blog
                  </div>
                </motion.li>
                <motion.li className="nav-item"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Contact Us
                  </div>
                </motion.li>
                <motion.li className="resumeButton"
                  initial={{x: -250}}
                  animate={{x: 0}}>
                  <div className="clickyButton">Get a quote
                  </div>
                </motion.li>
              </ul>
            </div>
        </motion.nav>
    );
}
    
export default Navbar;