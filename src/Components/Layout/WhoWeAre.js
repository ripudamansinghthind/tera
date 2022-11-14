import React from 'react'
import '../css/WhoWeAre.css'

//import resources
import Boss from '../resources/Boss.JPG'
import Boss2 from '../resources/Boss2.png'

const WhoWeAre = () => {
  return (
    <div className='card'>
        <div className='title-row-card'>
            <h2>About Us</h2>
        </div>
            <p>We at Tera Solutions Ltd. specialize in the removal or encapsulation of various hazardous materials, including asbestos, mould, and lead. We have a team of trained and certified professionals that make use of our leading industry equipment and techniques on the substance that you need removed. We are locally owned and operated, as well as fully licensed, insured, and AHERA certified. We at Tera pride ourselves on providing you with a prompt, safe removal process.</p>
        <div className='row-card'>
            <h2>Our Mission</h2>
            <p>We are dedicated in bringing our customers the highest level of service. Regardless of the size or type of job we are on, we are commited to professional and prompt service. We aim to be quick with correspondence and continually work to keep your trust</p>
        </div>
        <div className='title-row-card'>
            <h2>Meet the Team!</h2>
        </div>
        <div className="row-card">
            <div className='row-card-column1'>
              <h2>Manjot Samra</h2>
              Director of CityView Drywall Ltd.
              </div>
            <div className='row-card-column2'>
              <img className='boss-cropper' src={ Boss } alt = "Landing Page"/>
            </div>
        </div>
        <div className="row-card">
            <div className='row-card-column1'>
              <img className='pavit-cropper' src={ Boss2 } alt = "Landing Page"/>
              </div>
            <div className='row-card-column2-boss'>
            <h2>Pavit Deep Singh</h2>
              Project Manager
            </div>
        </div>
        
    </div>
  )
}

export default WhoWeAre