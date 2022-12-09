import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../css/Projects.css';

//import images
import GitHubImage from '../Icons/github.png';
import PlayImage from '../Icons/play.svg';
import TeraImgLP from '../Icons/TeraSolutions - Landing Page.jpg';
import TeraLogo from '../Icons/TeraLogo.svg';
import sortingVisLP from '../Icons/sortingVis - Landing Page.jpg';
import sortingVisSP from '../Icons/sortingVis - Solved Page.jpg';



const Projects = () => {
  return (
    <div className='card'>
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
                <img src= { sortingVisLP }  alt='Tera Landing Page'/>
            </div>
            <div>
                <img src= { sortingVisSP } alt='Tera Landing Page 2'/>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Projects