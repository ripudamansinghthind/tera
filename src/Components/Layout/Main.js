import React from 'react';
import '../css/Menu.css';

// Icons import
import LocationIcon from '../resources/location.svg';
import Img from '../resources/icon.webp';
import Location from '../resources/location.png';
import workSafeLogo from '../resources/worksafelogo.png'
import SurreyCity from '../resources/SurreyCity.jpg'
import CityViewImg from '../resources/CityViewLogo.png'
import asbestosImg from '../resources/asbestoswarning.png'
import vermiHazardImg from '../resources/vermihazardImg.png'
import moldHazardImg from '../resources/moldHazardImg.png' 

import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import { motion, AnimatePresence } from 'framer-motion';


function Main() {
  return (
    <>
      <div className="card">
        <div className="image-row-card">
            <div className="image-cropper">
              <img className='LandingPage' src={ Img } alt = "Landing Page"/>
            </div>
            <div className='text-over-image'>
              <h1 className='image-text'>Tera Asbestos and Hazmat Solutions Ltd.</h1>
              <div className='landing-buttons'>
                <div className='consult-button'>
                  <Link to="/">
                    <div className="image-text-btn">Free Consultation
                    </div>
                  </Link>
                </div>
                <div className='consult-button'>
                  <Link to="/WhoWeAre">
                    <div className="image-text-btn">Contact Us
                    </div>
                  </Link>
                </div>
              </div>
              <img src={ workSafeLogo } className='safety-logo-cropper' alt = 'Safety Logo' />
            </div>
          </div>
          <div className='mobile-text-over-image'>
              <h1 className='image-text'>Tera Asbestos and Hazmat Solutions Ltd.</h1>
              <div className='landing-buttons'>
                <div className='consult-button'>
                  <Link to="/">
                    <div className="image-text-btn">Free Consultation
                    </div>
                  </Link>
                </div>
                <div className='consult-button'>
                  <Link to="/WhoWeAre">
                    <div className="image-text-btn">Contact Us
                    </div>
                  </Link>
                </div>
              </div>
              <img src={ workSafeLogo } className='safety-logo-cropper' alt = 'Safety Logo' />
            </div>
        <div className='row-card'>
          <h2 className='row-card-main-title'>At Tera we specialize in removal or encapsulation of hazardous material, including lead and lead-based materials, mould and asbestos.</h2>
          <p className='para-text'> We are proud to be fully insured, licensed and always working in compliance with WorkSafeBC. No matter the space, whether it's your home, business, or industrial site, we are locally owned and make sure you know all your options and help you choose the best treatment for your needs.</p>
        </div>
      </div>
    <div className='repos'>
        <div className='card'>
            <h1 className='row-card-main-title'>Services</h1>
            <div className="trimmed-row-card">
              <div className='box-card-left'>
                <img src= { asbestosImg } alt='Asbestos Warning' className='service-img-cropper1'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Asbestos Abatement / Removal</h3>
                  <p>We offer professional asbestos abatement and removal services for residential properties that are efficient without sacrificing your safety. We can work with you directly, or coordinate with your renovation contractor to safely accomplish your asbestos removal needs.</p>
                  <p className='box-card-grey-text'>Read more from the link below to know more about our process, and how we make sure not to disturb danger fibres</p>
                  <a href='./Services.js'>Read More...</a>
                  <br />
                </div>
              </div>
              <div className='box-card-center'>
                <img src= { vermiHazardImg } alt='Vermiculite Warning' className='service-img-cropper2'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Vermiculite Removal</h3>
                  <p>Have a project held up because of asbestos fibres in your vermiculite insulations? Get a free consultation today!</p>
                  <p className='box-card-grey-text'>Read more from the link below to know more about our process, and how we make sure not to disturb danger fibres</p>
                  <a href='./Services.js'>Read More...</a>
                  <br />
                </div>
              </div>
              <div className='box-card-right'>
                <img src= { moldHazardImg } alt='Mold Warning' className='service-img-cropper3'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Lead, Mold and other hazardous Materials</h3>
                  <p>Have Mold, Lead or other hazardous materials contaminating your property(s)? Reach out and we can help you with a free consultation and hopefully remove all your unwelcome issues. </p>
                  <p className='box-card-grey-text'>Read more from the link below to know more about our process, and how we make sure to safely dispose off the hazard.</p>
                  <a href='./Services.js'>Read More...</a>
                  <br />
                </div>
              </div>
          </div>
          <div className="row-card-img">
            <div className='row-card-column1'>
              <h2 className='row-card-main-title'>Based in Surrey, serving all of Lower Mainland</h2>
              <p>Tera serves businesses, industrial sites, and residential homes all throughout Lower Mainland.</p>
              <p>Go through our services and projects to learn more about our experience and work.</p>
              <p>Call us or click on the [Get a quote] button to get a free consultation and see if we fit your needs.</p>
            </div>
            <div className='row-card-column2'>
              <img className='partner-cropper' src={ SurreyCity } alt = "Landing Page"/>
            </div>
          </div>
    </div>
  </div>
</>
);
}


export default Main;