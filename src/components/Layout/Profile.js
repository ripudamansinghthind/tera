import React from 'react';
import '../css/Profile.css'
import Img from '../Icons/FelixThindBGRemFilm.png';

// Icons import
import LocationIcon from '../Icons/location.svg';


function Profile() {
  return (
    <>
    <div className="card" id="Profile">
      <div className="profile-header">
        <h1>Welcome!</h1>
      </div>
      <div className="profile__row">
        <div className='profile__column1'>
          <div className="image-cropper">
            <img src={ Img } alt = "My portfolio pic"/>
          </div>
          <h1 className='CEO__title'>Felix Thind</h1>
          <div className='img__cropper_text'>
            <p>Software Developer</p>
            <p>Business | Tech</p>
            <p className='img__cropper_p'>Surrey, BC</p>
          </div>
        </div>
        <div className='profile__column2'>
          <br />
          <br />
          <h2>I'm a consistent and persistent software developer currently working on a few web development projects</h2>
          <br />
          <p className='profile__column2_text'>Feel free to browse through my experience, projects or resume</p>
          <br />
          <p className='profile__column2_text'>Think we should connect? I think so too! Message me on any of my socials linked below</p>
          <h3>Everything, Everyone, Everywhere!</h3>
        </div>
      </div>
      </div>
    </>
  );
}


export default Profile;