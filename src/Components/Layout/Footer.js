import React from 'react';
import '../css/Footer.css'
import LinkedInImage from '../resources/linked.png'
import GitHubImage from '../resources/github.png'
import EmailImage from '../resources/email.png'

const Foot = (props) => {
  return (
    <div className="footer">
        <div className='Footer-sections'>
            <div className='footer-column-1'>
                <p>Products</p>
            </div>
            <div className='footer-column-2'>
                <p>Services</p>
            </div>
        </div>
        <div className="social-images">
            <a href="mailto:ripudamansinghthind@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={ EmailImage } className="image-socials" alt = "Email social link"/></a>
            <a href="https://www.linkedin.com/in/ripudamanthind/" target="_blank" rel="noopener noreferrer">
            <img src={ LinkedInImage } className="image-socials" alt = "LinkedIn social link"/></a>
            <a href="https://github.com/ripudamansinghthind" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="image-socials" alt = "GitHub social link"/></a>
            <p className = "footer-para-text">Copyright @2022 Tera asbestos and hazmat solutions Ltd. All rights reserved. <a href="https://github.com/ripudamansinghthind/portfolio-website" className="footer-a" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
    </div>
    );
}
    
export default Foot;