import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Projects.css';
import { motion } from 'framer-motion';

//import images
import GitHubImage from '../Icons/github.png';
import PlayImage from '../Icons/play.svg';
import TeraImgLP from '../Icons/TeraSolutions - Landing Page.jpg';
import TeraLogo from '../Icons/TeraLogo.svg';
import sortingVisLP from '../Icons/sortingVis - Landing Page.jpg';
import sortingVisSP from '../Icons/sortingVis - Solved Page.jpg';
import ccdLP from '../Icons/CCD - Landing Page.JPG';
import ccdMP from '../Icons/CCD - Menu Page.JPG';
import ccdCUP from '../Icons/CCD - Contact Us.JPG';



const Projects = () => {
  return (
    <motion.div className='card'
    initial={{x: "100%"}}
    animate={{x: 0}}
    transition={{
      delay: 0.1,
      x: { duration: 1 },
      default: { ease: "linear" }
    }}
    exit={{ x: "100%", opacity: 0 }}
    >
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-row">
        <div className="projects-column1">
          <h3>TeraSolutions.ca</h3>
          <p>Logo Design, Full stack website design and development</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">ReactJS</p>
            <p className="tech-skills-text">Netlify</p>
          </div>
          <br />
          <div className='projects__row_logos'>
            <a className='projects__row_logos_a' href="https://github.com/ripudamansinghthind/tera" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/> <p className='projects-link-image_text'>Source Code</p></a>
            <a className='projects__row_logos_a' href="https://www.terasolutions.ca/" target="_blank" rel="noopener noreferrer">
            <img src={ PlayImage } className="projects-link-image" alt = "GitHub social link"/><p className='projects-link-image_text'>Live Website!</p></a>
          </div>
        </div>
        <div className="projects-column2">
          <Carousel>
                <div>
                    <img src= { TeraImgLP }  alt='Tera Landing Page'/>
                </div>
                <div>
                    <img src= { TeraLogo } alt='Tera Landing Page 2'/>
                </div>
            </Carousel>
        </div>
      </div>
      <div className="projects-row">
        <div className="projects-column1">
          <h3>Sorting Visualizer</h3>
          <p>Creating using ReactJS, uses O(n^2) algorithms to solve an array presented as a graph.</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">ReactJS</p>
            <p className="tech-skills-text">Netlify</p>
          </div>
          <br />
          <div className='projects__row_logos'>
            <a className='projects__row_logos_a' href="https://github.com/ripudamansinghthind/sorting-visualization" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/><p className='projects-link-image_text'>Source Code</p></a>
            <a className='projects__row_logos_a' href="https://sortingvizualizer.netlify.app/" target="_blank" rel="noopener noreferrer">
            <img src={ PlayImage } className="projects-link-image" alt = "GitHub social link"/><p className='projects-link-image_text'>Live Website!</p></a>
          </div>
        </div>
        <div className="projects-column2">
          <Carousel>
                <div>
                    <img src= { sortingVisLP }  alt='Sorting Visualizer Landing Page'/>
                </div>
                <div>
                    <img src= { sortingVisSP } alt='Sorting Visualizer Solved Page'/>
                </div>
          </Carousel>
        </div>
      </div>
      <div className="projects-row">
        <div className="projects-column1">
          <h3>Cafe Coffee Day</h3>
          <p>Website Redesign proposal for a company as a class project</p>
          <br />
          <p>Frameworks, Libraries, Languages:</p>
          <div className="tech-skills">
            <p className="tech-skills-text">HTML</p>
            <p className="tech-skills-text">CSS</p>
            <p className="tech-skills-text">JS6</p>
          </div>
          <br />
          <div className='projects__row_logos'>
            <a className='projects__row_logos_a' href="https://github.com/ripudamansinghthind/Website-CCD" target="_blank" rel="noopener noreferrer">
            <img src={ GitHubImage } className="projects-link-image" alt = "GitHub social link"/> <p className='projects-link-image_text'>Source Code</p></a>
            <a className='projects__row_logos_a' href="https://ripudamansinghthind.github.io/Website-CCD/" target="_blank" rel="noopener noreferrer">
            <img src={ PlayImage } className="projects-link-image" alt = "GitHub social link"/><p className='projects-link-image_text'>Live Website!</p></a>
          </div>
        </div>
        <div className="projects-column2">
          <Carousel>
            <div>
                <img src= { ccdLP }  alt='CCD Landing Page'/>
            </div>
            <div>
                <img src= { ccdMP } alt='CCD Menu Page'/>
            </div>
            <div>
                <img src= { ccdCUP } alt='CCD Conact Us Form Page'/>
            </div>
            </Carousel>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects