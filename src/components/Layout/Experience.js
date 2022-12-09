import React from 'react';

import '../css/Experience.css';

const Experience = () => {
  return (
    <div className="card" id="Profile">
      <div className="Experience-header">
          <h1 id = "Experience">Experience</h1>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3 className='experience-column-1_text'>Web Developer</h3>
          <a href="https://www.thindcreatives.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">Thind Creatives Ltd.</a>
          <p>Jan 2022 - Currently Employed</p>
        </div>
        <div className="experience-column-2">
        <p>• Designed and developer 20+ front-end and back-end applications utilizing React.js, Node.js and TypeScript</p>
        <p>• Played a key role working with stakeholders to design complex solutions, led from inception to prodcution</p>
        <p>• Worked on multiple original development projects including e-commerce websites, web applications and desktop software, encompassing design, coding, testing and maintenance whilst managing 95% client satisfaction</p>
        </div>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3 className='experience-column-1_text'>React Developer</h3>
          <a href="https://www.getwoobie.com/" className="company-website-experience" target="_blank" rel="noopener noreferrer">GetWoobie Ltd. (Remote Lehi, Utah)</a>
          <p>Aug 2021 - Dec 2021</p>
        </div>
        <div className="experience-column-2">
        <p>• Developed Website Application Prototypes for a Dental AI Software using React, TypeScript, Material UI, aws cdk & ESlint</p>
        </div>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3 className='experience-column-1_text'>Software Developer Co-op </h3>
          <a href="https://www.teck.com/" className="company-website-experience" target="_blank" rel="noopener noreferrer">Teck Coal Resources Ltd. (Calgary, AB)</a>
          <p>Sept 2020 - April 2021</p>
        </div>
      <div className="experience-column-2">
      <p>• Product Support: Provided phone and technical support including solution search in internal documentation, research in previous cases, technical analysis, database troubleshooting, efficient interfacing between developers and end customers in an agile SCRUM workspace</p>
      <p>• Developed tests and features for the product frequently using C# (.NET 5.0 and CORE), aws S3, SQL and Python</p>
      <p>• Improved CI/CD tasks decreasing time required for routine tasks by over 40% and average deployment time by 50%</p>
      </div>
      </div>
      <div className="row">
        <div className="experience-column-1">
          <h3 className='experience-column-1_text'>Junior Full Stack Developer </h3>
          <a href="https://swartz.dev/" className="company-website-experience" target="_blank" rel="noopener noreferrer">Swartz Software Development (Kamloops, BC)</a>
          <p>Jan 2020 - April 2020</p>
        </div>
      <div className="experience-column-2">
      <p>• Developed prototypes for hybrid mobile applications using React Native, TypeScript & ESlint</p>
      <p>• Worked directly under the CTO, and the shareholders on multiple projects contributing in requirement gathering, design, marketing and testing</p>
      <p>• Introduced 10+ improvements for CI & CD by researching and introducing libraries like Detox for React Native e2e testing and TravisCI and Jenkins for continuous integration</p>
      </div>
      </div>
      <div className="row">
        <div className="experience-column-1">
      <h3 className='experience-column-1_text'>Software Developer Co-op</h3>
      <a href="https://www.usnr.com/en/page/home" className="company-website-experience" target="_blank" rel="noopener noreferrer">USNR (Salmon Arm, BC)</a>
        <p>May 2019 - Dec 2019</p>
          </div>
          <div className="experience-column-2">
          <p>• Contributed to design and development of neural networks for species detection of wood improving the results from 36% accuracy to 94%</p>
          <p>• Assisted in requirement gathering, design, development, and documentation for various AI projects using Python, SQL and C#</p>
          <p>• Research computer vision developing new applications for our network and did hands-on work with bioluma sensors to understand and improve how data was being collected and used for various neural networks across the company</p>
          </div>
          </div>
          <div className="row">
        <div className="experience-column-1">
        <h3 className='experience-column-1_text'>Research Assistant </h3>
        <a href="https://tru.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">TRU (Kamloops, BC)</a>
        <p>Jan 2019 - April 2019</p>
          </div>
          <div className="experience-column-2">
          <p>• Upgraded basic biology scripts like DNA to RNA conversion and vice versa being used by the professor from Perl to Python</p>
          <p>• Led the coding side of the project. Researched the best approaches that could be incorporated for accurate results with low runtimes</p>
          </div>
          </div>

          <div className="row">
            <div className="experience-column-1">
              <h3 className='experience-column-1_text'>Teaching Assistant</h3>
              <a href="https://tru.ca/" className="company-website-experience" target="_blank" rel="noopener noreferrer">TRU (Kamloops, BC)</a>
              <p>Sept 2018 - Dec 2018</p>
            </div>
            <div className="experience-column-2">
              <p>• [Python and C#] Assisted the professor with managing evaluations of course assignments, quizzes and development of feedback</p>
              <p>• Tutored students who needed extra help outside classroom hours</p>
            </div>
          </div>

          <div className="row">
            <div className="experience-column-1">
              <h3 className='experience-column-1_text'>Cashier</h3>
              <a href="https://www.walmart.ca/en" className="company-website-experience" target="_blank" rel="noopener noreferrer">Walmart (Kamloops, BC)</a>
              <p>April 2018 - Jan 2019</p>
            </div>
            <div className="experience-column-2">
              <p>• Gained people skills by processing people’s transactions and providing good customer service</p>
              </div>
          </div>
        </div>
  )
}

export default Experience