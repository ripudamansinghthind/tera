import React from 'react'
import '../css/WhoWeAre.css'

//import resources
import Boss from '../resources/Boss.JPG'
import Boss2 from '../resources/Boss2.png'
import Boss3 from '../resources/Boss3.png'

const WhoWeAre = () => {
  return (
    <div className='card'>
            <div className='row-card-whoweare'>
              <h2 className='row-card-main-title'>About Us</h2>
                <p>We at Tera Solutions Ltd. specialize in the removal or encapsulation of various hazardous materials, including asbestos, mould, and lead. We have a team of trained and certified professionals that make use of our leading industry equipment and techniques on the substance that you need removed. We are locally owned and operated, as well as fully licensed, insured, and AHERA certified. We at Tera pride ourselves on providing you with a prompt, safe removal process.</p>
              </div>
              <div className='row-card-whoweare2'>
                <h2>Our Mission</h2>
                <p>We are dedicated in bringing our customers the highest level of service. Regardless of the size or type of job we are on, we are commited to professional and prompt service. We aim to be quick with correspondence and continually work to keep your trust</p>
              </div>
              
        <div className='row-card-whoweare3'>
          <h2 className='row-card-main-title'>Meet the Team!</h2>
            <div className="trimmed-boss-row-card">
              <div className='box-card-left'>
                <img src= { Boss } alt='Manjot Samra' className='service-img-cropper3'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Manjot Samra</h3>
                  <p className='box-card-grey-text'>President @CityView Group of Companies</p>
                  <a href='./Services.js'>Read More...</a>
                  <br />
                </div>
              </div>
              <div className='box-card-center'>
                <img src= { Boss2 } alt='Gurpreet Samra' className='service-img-cropper3'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Gurpreet Samra</h3>
                  <p className='box-card-grey-text'>President @CityView Group of Companies</p>
                  <a href='./Services.js'>Read More...</a><br />
                </div>
              </div>
              <div className='box-card-right'>
                <img src= { Boss3 } alt='Pavit Deep Singh' className='service-img-cropper3'/>
                <div className='box-card-text'>
                  <h3 className='row-card-title'>Pavit Deep Singh</h3>
                  <p className='box-card-grey-text'>Project Manager @Tera</p>
                  <a href='./Services.js'>Read More...</a>
                  <br />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default WhoWeAre