import React from 'react';
import '../css/Footer.css'
import LinkedInImage from '../resources/linked.png'
import GitHubImage from '../resources/github.png'
import EmailImage from '../resources/email.png'
import CityViewImg from '../resources/CityViewLogo.png'

import { motion } from 'framer-motion'
import Logo from '../resources/Logo.svg'


const Foot = (props) => {
  return (
        <div className="footer">
            <div class="footer__addr">
                <div className='footer-column1'>
                    <h3>Contact</h3>
                    17537 Hwy 10 (56 Ave) Surrey, BC, Canada V3S 1C4<br />
                    <br />
                    Office:<br />
                    +1 (604) 782 - 4041<br />
                    <br />
                    Manjot Samra:
                    +1 (604) 503 - 5445<br />
                    Pavit Deep Singh:
                    +1 (604) 614 - 5188<br />
                    <br />
                    Email us at: info@terasolutions.ca <br />
                </div>
                <div className='footer-column2'>
                    <motion.img
                    className='footer__logo'
                    src={ Logo }
                    alt='Logo' 
                    initial={{x: -250}}
                    animate={{x: 0}}
                    />
                    <motion.img 
                    className='footer__logo_cityview' 
                    src={ CityViewImg } 
                    alt = "CityView Logo"
                    initial={{x: -250}}
                    animate={{x: 0}}/>
                </div>
        <div className='footer_link'>
            <ul className="footer__nav">
                <li class="nav__item">
                <h2 class="nav__title"></h2>

                <ul class="nav__ul">
                    <li>
                    <h2 class="nav__title">Services</h2>
                    </li>

                    <li>
                    <a href="#">Projects</a>
                    </li>
                        
                    <li>
                    <a href="#">Blog</a>
                    </li>

                    <li>
                    <a href="#">About Us</a>
                    </li>

                    <li>
                    <a href="#">Careers</a>
                    </li>
                </ul>
                </li>
                
                <li class="nav__item nav__item--extra">
                <h2 class="nav__title">Locations We Service</h2>
                
                <ul class="nav__ul nav__ul--extra">
                    <li>
                    <p>Surrey</p>
                    <p>Metro Vancouver</p>
                    <p>Burnaby</p>
                    </li>
                    
                    <li>
                    <p>Abbotsford</p>
                    <p>Richmond</p>
                    <p>West Vancouver</p>
                    </li>
                </ul>
                </li>
                
                <li class="nav__item">
                <h2 class="nav__title">Legal</h2>
                
                <ul class="nav__ul">
                    <li>
                    <a href="#">Privacy Policy</a>
                    </li>
                    
                    <li>
                    <a href="#">Terms of Use</a>
                    </li>
                    
                    <li>
                    <a href="#">Sitemap</a>
                    </li>
                </ul>
                </li>
            </ul>
        </div>
        
        <div className="legal">
            <p>&copy; 2022 Tera. All rights reserved.</p>
        
        <div className="legal__links">
            <span>Made by <a href='https://www.felixthind.com/' target="_blank" className="" rel="noreferrer">Felix</a></span>
        </div>
        </div>
    </div>
    </div>
    );
}
    
export default Foot;