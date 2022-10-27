import React from 'react';
import '../css/Content.css'

import GitHubImage from '../resources/github.png'
import PlayImage from '../resources/arrow.svg'

const Content = (props) => {
    return (
      <div className='repos'>
        <div className='card'>
          <div className="projects-header">
            <h1>Services</h1>
            <p>I have many more projects that I am constantly working on hosted on my GitHub</p>
          </div>
          <div className="projects-row">
            <div className="projects-column">
              <div className = "projects-column-1">
                <h3>Hazardous Material Management</h3>
              </div>
              <div className = "projects-column-2">
                <p>The sorting visualizer only covers O(n^2) algorithms for now. I am implementing a new menu and some other algorithms soon!</p>
                <br />
              </div>
            </div>
          <div className="projects-column">
            <div className = "projects-column-1">
              <h3>Demolition & Deconstruction</h3>
            </div>
          <div className = "projects-column-2">
            <p>React Native calculator made with created with TypeScript</p>
            <br />
        </div>
        </div>
          <div className="projects-column">
             <div className = "projects-column-1">
                <h3>Asbestos Abatement</h3>
              </div>
              <div className = "projects-column-2">
                <p>Work in progress</p>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Content;