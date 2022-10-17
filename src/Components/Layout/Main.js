import React from 'react';
import '../css/Menu.css';
import Img from '../resources/icon.webp';

// Icons import
import LocationIcon from '../resources/location.svg';


function Main() {
  return (
    <>
    <div className="card" id="Profile">
      <div className="row-card">
        <div className="column-1-card">
          <div className="image-cropper">
            <img src={ Img } alt = "My portfolio pic"/>
            </div>
          <img src={LocationIcon} className="location-img" alt='Location' />
          <p className="title">| Vancouver, BC |</p>
        </div>   
        <div className="column-2-card">
          <h1>Fast, Reliable, and Safe!</h1>
          <hr className="solid"></hr>
          <p>Client satisfaction is our top priority. We deliver FAST removal and cleaning of all asbestos materials safely in compliance with all WorkSafeBC OHS Regulations, while offering a competitive price and quality of work.</p>
        </div>
      </div>
    </div>
    </>
  );
}


export default Main;