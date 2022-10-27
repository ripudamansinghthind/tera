import React from 'react';
import '../css/Footer.css'
import LinkedInImage from '../resources/linked.png'
import GitHubImage from '../resources/github.png'
import EmailImage from '../resources/email.png'

import { motion } from 'framer-motion'
import Logo from '../resources/Logo.svg'


const Foot = (props) => {
  return (
        <div className="footer">
            <div class="footer__addr">
                <motion.img
                className='footer__logo'
                src={Logo}
                alt='Logo' 
                initial={{x: -250}}
                animate={{x: 0}}
                />
                
                <h3>Contact</h3>
                17537 Hwy 10 (56 Ave) Surrey, BC, Canada V3S 1C4<br />
                <ul class="footer__nav">
                    <li class="nav__item">
                    <h2 class="nav__title">Media</h2>

                    <ul class="nav__ul">
                        <li>
                        <a href="#">Online</a>
                        </li>

                        <li>
                        <a href="#">Print</a>
                        </li>
                            
                        <li>
                        <a href="#">Alternative Ads</a>
                        </li>
                    </ul>
                    </li>
                    
                    <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Technology</h2>
                    
                    <ul class="nav__ul nav__ul--extra">
                        <li>
                        <a href="#">Hardware Design</a>
                        </li>
                        
                        <li>
                        <a href="#">Software Design</a>
                        </li>
                        
                        <li>
                        <a href="#">Digital Signage</a>
                        </li>
                        
                        <li>
                        <a href="#">Automation</a>
                        </li>
                        
                        <li>
                        <a href="#">Artificial Intelligence</a>
                        </li>
                        
                        <li>
                        <a href="#">IoT</a>
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
        
        <div class="legal">
            <p>&copy; 2022 Tera. All rights reserved.</p>
        
        <div class="legal__links">
            <span>Made by Felix</span>
        </div>
        </div>
    </div>
    </div>
    );
}
    
export default Foot;