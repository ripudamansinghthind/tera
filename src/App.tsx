import React, { useCallback, useEffect, useState } from "react";
import {
    Routes,
    Route,
    Link,
    NavLink,
    useLocation,
  } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

//cursor
import 'custom-cursor-react/dist/index.css';

//particles
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import { ISourceOptions } from "tsparticles-engine";

//Typewriter
import Typewriter from 'typewriter-effect';

//import components
import Profile from './components/Layout/Profile.js'
import Footer from './components/Layout/Footer.js'
import NotFound from './components/Layout/NotFound.js'
import Experience from './components/Layout/Experience.js'
import Projects from './components/Layout/Projects.js'
import Blog from "./components/Layout/Blog";
import Studio from "./components/Layout/Studio.js";

import '../src/components/css/Navbar.css'


import Logo from './components/Icons/LogoWhite.png';
import LinkedInImage from '../src/components/Icons/linkedin.svg';
import GitHubImage from '../src/components/Icons/github.svg';
import EmailImage from '../src/components/Icons/mail.svg';
import Resume from '../src/components/Icons/Felix Thind - No personal.pdf';

function App() {
  //particles
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    //Menu
    const [toggleMenu, setToggleMenu] = useState(false);

    //responsive screen
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    
    //router-dom
    const location = useLocation();
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
        <div className="navbar-grid">
        {(toggleMenu || screenWidth > 768) && (
        <motion.nav className="navbar" id="navbar">
            <div className="nav-content">
              <div className="logo-border">
                <Link to="/">
                <motion.img
                  onClick={ toggleNav }
                  src={Logo}
                  className="logo-img"
                  alt='Logo'
                  initial={{x: -1000}}
                  animate={{x: 0}}
                  transition={{
                    delay: 1,
                    x: { duration: 1 },
                    default: { ease: "linear" }
                  }} />
                  </Link>
                </div>
                <ul className="nav-items">
                    <motion.li className="nav-item"
                      initial={{x: -1000}}
                      animate={{x: 0}}
                      transition={{
                        delay: 1.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                      }}>
                      <NavLink
                        to="/Experience"
                        onClick={ toggleNav }
                        style={({ isActive }) => ({
                          color: isActive ? '#1E1E1E' : '#C7C7C7',
                        })}
                      >
                        EXPERIENCE
                      </NavLink>
                    </motion.li>
                    <motion.li className="nav-item"
                      initial={{x: -1000}}
                      animate={{x: 0}}
                      transition={{
                        delay: 2,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                      }}>
                      <NavLink
                        to="/Projects"
                        onClick={ toggleNav }
                        style={({ isActive }) => ({
                          color: isActive ? '#1E1E1E' : '#C7C7C7',
                        })}
                      >
                        PROJECTS
                      </NavLink>
                    </motion.li>
                  </ul>
              </div>
          </motion.nav>
        )}
        <motion.button 
              className='toggleButton'
              initial={{x: -450}}
              animate={{x: 0}}
              onClick={ toggleNav }
              >
          </motion.button>
        </div>
        <div className='header-grid'>
          <motion.div className="header"
            initial={{x: "100%"}}
            animate={{x: 0}}
            transition={{
              delay: 0.1,
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            exit={{ x: "100%", opacity: 0 }}
            >
          <h1>
            <Typewriter
              options={{
                autoStart: true,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Everything! ')
                    .pauseFor(1500)
                  typewriter.typeString('Everyone! ')
                    .pauseFor(1500)
                  typewriter.typeString('Everywhere!')
                    .start();
                }}
              />
          </h1>
          </motion.div>
        </div>
        <div className="app-body">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Profile />}/>
              <Route path="/Experience" element={<Experience />} />
              <Route path="/Projects" element={<Projects />}/>
              <Route path="/Blog" element={<Blog />}/>
              <Route path="/Studio" element={<Studio />}/>
              <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        </div>
        
        <motion.div className="nav__footer__row"
          initial={{x: -1000}}
          animate={{x: 0}}
          transition={{
            delay: 2.5,
            x: { duration: 1 },
            default: { ease: "linear" }
          }}>
          <li className="resumeButton">
              <a href={Resume} target="_blank" rel="noopener noreferrer">
            <motion.div className="clickyButton">
          VIEW MY CV
            </motion.div></a>
          </li>
        </motion.div>
        <motion.div className="footer">
          <div className="footer__row">
            <motion.div className="nav__footer__row2"
                    initial={{ y: 200 }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 3,
                      duration: 2,
                      type: 'spring',
                      bounce: 0.6,
                    }}>
              <p className="footer_text">CONNECT WITH ME</p>
              <motion.div className="social-images"
                initial={{ y: 200 }}
                animate={{ y: 0 }}
                transition={{
                  delay: 4.5,
                  duration: 2,
                  type: 'spring',
                  bounce: 0.6,
                }}>
                <a href="mailto:ripudamansinghthind@gmail.com" target="_blank" rel="noopener noreferrer">
                  <motion.img src={ EmailImage } className="image-socials_mail" alt = "Email social link"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      delay: 3,
                      duration: 1.7,
                    }}/></a>
                <a href="https://www.linkedin.com/in/ripudamanthind/" target="_blank" rel="noopener noreferrer">
                  <motion.img src={ LinkedInImage } className="image-socials_linkedin" alt = "LinkedIn social link"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      delay: 3,
                      duration: 1.7,
                    }}/></a>
                <a href="https://github.com/ripudamansinghthind" target="_blank" rel="noopener noreferrer">
                  <motion.img src={ GitHubImage } className="image-socials_github" alt = "GitHub social link"
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{
                      delay: 3,
                      duration: 1.7,
                    }}/></a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
    </div>
    );
}

export default App;
