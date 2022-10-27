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
          <div className="image-cropper">
            <img src={ Img } alt = "Landing Page"/>
            </div>
        </div>
    </div>
    </>
  );
}


export default Main;