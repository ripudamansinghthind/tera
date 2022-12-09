import React, { useCallback, useEffect, useState } from "react";
import {
    Routes,
    Route,
    Link
  } from "react-router-dom";
  import { motion, AnimatePresence } from 'framer-motion';

//particles
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

//import components
import Navbar from './components/Layout/Navbar.js'
import Profile from './components/Layout/Profile.js'
import Footer from './components/Layout/Footer.js'
import NotFound from './components/Layout/NotFound.js'
import Experience from './components/Layout/Experience.js'
import Projects from './components/Layout/Projects.js'

import '../src/components/css/Navbar.css'


import Logo from './components/Icons/LogoWhite.png';
import LinkedInImage from '../src/components/Icons/linked.png';
import GitHubImage from '../src/components/Icons/github.png';
import EmailImage from '../src/components/Icons/email.png';
import Resume from '../src/components/Icons/Felix Thind - No personal.pdf';

function App() {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])


    return (
        <div className="App">
            <Particles options={particlesOptions as ISourceOptions} init={particlesInit}/>
      {(toggleMenu || screenWidth > 768) && (
      <motion.nav className="navbar" id="navbar"
          initial={{x: -250}}
          animate={{x: 0}}>
          <div className="nav-content">
            <Link to="/">
            <img src={Logo} className="logo-img" alt='Logo' />
            </Link>
            <div className="nav-text-diff">
              <ul className="nav-items">
                  <li className="nav-item">
                  <Link to="/Experience">
                    <div className="clickyButton">Experience
                    </div>
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link to="/Projects">
                    <div className="clickyButton">Projects
                    </div>
                  </Link>
                  </li>
                </ul>
              </div>
              <div className="nav__footer">

                <div className="nav__footer__row2">
                  <div className="social-images">
                    <a href="mailto:ripudamansinghthind@gmail.com" target="_blank" rel="noopener noreferrer">
                      <img src={ EmailImage } className="image-socials" alt = "Email social link"/></a>
                    <a href="https://www.linkedin.com/in/ripudamanthind/" target="_blank" rel="noopener noreferrer">
                      <img src={ LinkedInImage } className="image-socials" alt = "LinkedIn social link"/></a>
                    <a href="https://github.com/ripudamansinghthind" target="_blank" rel="noopener noreferrer">
                      <img src={ GitHubImage } className="image-socials_github" alt = "GitHub social link"/></a>
                  </div>
                </div>
                <div className="nav__footer__row">
                  <li className="resumeButton">
                      <a href={Resume} target="_blank" rel="noopener noreferrer">
                    <div className="clickyButton">Resume.pdf
                    </div></a>
                  </li>
                </div>
              </div>
            </div>
        </motion.nav>
      )}
            <Routes>
                <Route path="/" element={<Profile />}/>
                <Route path="/Experience" element={<Experience />} />
                <Route path="/Projects" element={<Projects />}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
