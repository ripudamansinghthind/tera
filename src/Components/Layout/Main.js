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
          <h2 className='row-card-title'>At Tera we specialize in removal or encapsulation of hazardous material, including lead and lead-based materials, mould and asbestos.</h2>
          <p className='para-text'> We are proud to be fully insured, licensed and always working in compliance with WorkSafeBC. No matter the space, whether it's your home, business, or industrial site, we are locally owned and make sure you know all your options and help you choose the best treatment for your needs.</p>
        </div>
      </div>
    <div className='repos'>
        <div className='card'>
            <h1 className='row-card-title'>Services</h1>
            <div className="trimmed-row-card">
              <div className='box-card-left'>
                <img src= { asbestosImg } alt='Asbestos Warning' className='service-img-cropper1'/>
                <h3 className='row-card-title'>Asbestos Abatement / Removal</h3>
                <p>We offer professional asbestos abatement and removal services for residential properties that are efficient without sacrificing your safety. We can work with you directly, or coordinate with your renovation contractor to safely accomplish your asbestos removal needs.</p>
                <br />
              </div>
              <div className='box-card-center'>
                <img src= { vermiHazardImg } alt='Vermiculite Warning' className='service-img-cropper2'/>
                <h3 className='row-card-title'>Vermiculite Removal</h3>
                <p>Do you know if your vermiculite insulation contains asbestos fibres? Get a free consultation before starting your project that could disturb the insulation in your home.</p>
                <br />
              </div>
              <div className='box-card-right'>
                <img src= { moldHazardImg } alt='Mold Warning' className='service-img-cropper3'/>
                <h3 className='row-card-title'>Lead, Mold and other hazardous Materials</h3>
                <p>If mold is found in your home or business, it's advisable to avoid the contaminated space and get a professional consultation. Mold can spread rapidly and cause unwelcome issues</p>
                <br />
              </div>
          </div>
          <div className="row-card-img">
            <div className='row-card-column1'>
              <h2 className='row-card-title'>Based in Surrey, serving all of Lower Mainland</h2>
              <p>Whether you own a home, a commercial business or an industrial site, we at Tera are here to remove hazardous materials from any of your properties.</p>
              <p>Your project will be complete safely and on time thanks to our expertly-trained staff, quick response times and specialized equipment that we provide our customers with.</p>
            </div>
            <div className='row-card-column2'>
              <img className='partner-cropper' src={ SurreyCity } alt = "Landing Page"/>
            </div>
          </div>
          
          <div className='row-card-last'>
            {/* <h1>Learn more about our founding company!</h1>
            <div>
              <img className='partner-cropper' src={ CityViewImg } alt = "CityView Logo"/>
            </div>
            <a href='https://www.cityviewdrywall.com/' target="_blank" className="website-link" rel="noreferrer">Visit our website for more info!</a> */}
          </div>
    </div>
  </div>
</>
);
}


export default Main;