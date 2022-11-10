import React from 'react';
import '../css/Menu.css';

// Icons import
import LocationIcon from '../resources/location.svg';
import Img from '../resources/icon.webp';
import Location from '../resources/location.png';
import workSafeLogo from '../resources/worksafelogo.png'
import SurreyCity from '../resources/SurreyCity.jpg'


function Main() {
  return (
    <>
      <div className="card">
        <div className="image-row-card">
            <div className="image-cropper">
              <img src={ Img } alt = "Landing Page"/>
            </div>
            <div className='text-over-image'>
              <img src={ workSafeLogo } className='safety-logo-cropper' alt = 'Safety Logo' />
              <h1>Tera Asbestos and Hazmat Solutions Ltd.</h1>
              <div>
                <div className='consult button'>
                  Free Consultation
                </div>
                <div className='consult button'>
                  Contact Us
                </div>
              </div>
            </div>
          </div>
        <div className='row-card'>
          <h2>At Tera we specialize in removal or encapsulation of hazardous material, including lead and lead-based materials, mould and asbestos.</h2>
          <p> We are proud to be fully insured, licensed and always working in compliance with WorkSafeBC. No matter the space, whether it's your home, business, or industrial site, we are locally owned and make sure you know all your options and help you choose the best treatment for your needs.</p>
        </div>
      </div>
    <div className='repos'>
        <div className='card'>
            <h1>Services</h1>
            <div className="trimmed-row-card">
              <div className='box-card-left'>
                <h3>Asbestos Abatement / Removal</h3>
                <p>We offer professional asbestos abatement and removal services for residential properties that are efficient without sacrificing your safety. We can work with you directly, or coordinate with your renovation contractor to safely accomplish your asbestos removal needs.</p>
                <br />
              </div>
              <div className='box-card-center'>
                <h3>Vermiculite Removal</h3>
                <p>Do you know if your vermiculite insulation contains asbestos fibres? Get a free consultation before starting your project that could disturb the insulation in your home.</p>
                <br />
              </div>
              <div className='box-card-right'>
                <h3>Lead, Mold and other hazardous Materials</h3>
                <p>If mold is found in your home or business, it's advisable to avoid the contaminated space and get a professional consultation. Mold can spread rapidly and cause unwelcome issues</p>
                <br />
              </div>
          </div>
          <div className="row-card">
            <div className='row-card-column1'>
              <h2>Based in Surrey, serving all of Lower Mainland</h2>
              <p>Whether you own a home, a commercial business or an industrial site, we at Tera are here to remove hazardous materials from any of your properties.</p>
              <p>Your project will be complete safely and on time thanks to our expertly-trained staff, quick response times and specialized equipment that we provide our customers with.</p>
            </div>
            <div className='row-card-column2'>
              <img src={ SurreyCity } alt = "Landing Page"/>
            </div>
          </div>
          <div className='row-card'>
            <div className='row-card-column1'>Meet our partners!</div>
            <div className='row-card-column2'></div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Main;