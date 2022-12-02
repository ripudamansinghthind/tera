//import libraries
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

//import components
import Main from "./Components/Layout/Main";
import Foot from "./Components/Layout/Footer";
import Careers from "./Components/Layout/Careers";
import AboutUs from './Components/Layout/AboutUs';
import Blog from "./Components/Layout/Blog";
import Modal from "./Components/Layout/Modal";
import Projects from "./Components/Layout/Projects";
import WhoWeAre from "./Components/Layout/WhoWeAre";
import Services from "./Components/Layout/Services";
import NotFound from "./Components/Layout/NotFound";

import '../src/Components/css/Navbar.css';
import '../src/App.css'

import Logo from "../src/Components/resources/Logo.svg";




function App() {
  // const location = useLocation();
  const [showModal, setShowModal] = useState(false);
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

  // document.body.addEventListener("click", () => {
  //   if (showModal) {
  //     setShowModal(false);
  //   }
  // });


  return (
    <div className="App">
      <div className='App__background'>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
          {(toggleMenu || screenWidth > 768) && (
            <motion.nav className="navbar" id="navbar"
                initial={{x: -250}}
                animate={{x: 0}}>
                  <div className="nav-content">
                  <Link to="/">
                    <motion.img 
                      src={Logo} 
                      className="logo-img" 
                      alt='Logo'
                      initial={{x: -250}}
                      animate={{x: 0}}
                      />
                    </Link>
                  <ul className="nav-items">
                      <motion.li className="nav-item"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <Link to="/Services">
                          <div className="clickyButton">Services
                          </div>
                        </Link>
                      </motion.li>
                      <motion.li className="nav-item"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <Link to="/WhoWeAre">
                          <div className="clickyButton">About us
                          </div>
                        </Link>
                      </motion.li>
                      <motion.li className="nav-item"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <Link to="/Projects">
                          <div className="clickyButton">Projects
                          </div>
                        </Link>
                      </motion.li>
                      <motion.li className="nav-item"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <Link to="/Blog">
                          <div className="clickyButton">Blog
                          </div>
                        </Link>
                      </motion.li>
                      <motion.li className="nav-item"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <Link to="/ContactUs">
                          <div className="clickyButton">Careers
                          </div>
                        </Link>
                      </motion.li>
                      <motion.li className="resumeButton"
                        initial={{x: -250}}
                        animate={{x: 0}}>
                        <div className="clickyButton"
                        onClick={() => setShowModal(true)}>Get a quote
                        </div>
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
            <Routes>
              <Route path="/" element={<Main />}/>
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Blog" element={<Blog />}/>
              <Route path="/ContactUs" element={<Careers />} />
              <Route path="/WhoWeAre" element={<WhoWeAre />} />
              <Route path="/Services" element={<Services />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Foot />
          </AnimatePresence>
      </div>
    </div>
  );
}


export default App;
