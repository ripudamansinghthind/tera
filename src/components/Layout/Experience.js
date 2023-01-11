import React from 'react';
import { motion } from 'framer-motion';

import '../css/Experience.css';

const Experience = () => {

  const Data = [
    {
      id: "1",
      title: "Web Developer",
      company: "Thind Creatives Ltd.",
      date: "Jan 2022 - Currently Employed",
      desc: [
        "• Designed and developed 20+ front-end and back-end applications utilizing React.js, Node.js and TypeScript\n",
        "• Played a key role working with stakeholders to design complex solutions, led from inception to production\n", 
        "• Worked on multiple original development projects including e-commerce websites, web applications and desktop software, encompassing design, coding, testing and maintenance whilst managing 95% client satisfaction"
      ],
    },
    {
      id: "2",
      title: "React Developer",
      company: "GetWoobie Ltd. (Remote Lehi, Utah)",
      date: "Aug 2021 - Dec 2021",
      desc: ["• Developed Website Application Prototypes for a Dental AI Software using React, TypeScript, Material UI, aws cdk & ESlint"],
    },
    {
      id: "3",
      title: "Software Developer Co-op",
      company: "Teck Coal Resources Ltd. (Calgary, AB)",
      date: "Sept 2020 - April 2021",
      desc: [
        "• Product Support: Provided phone and technical support including solution search in internal documentation, research in previous cases, technical analysis, database troubleshooting, efficient interfacing between developers and end customers in an agile SCRUM workspace<br />",
        "• Developed tests and features for the product frequently using C# (.NET 5.0 and CORE), aws S3, SQL and Python",
        "• Improved CI/CD tasks decreasing time required for routine tasks by over 40% and average deployment time by 50%"
      ],
    },
    {
      id: "4",
      title: "Junior Full Stack Developer",
      company: "Swartz Software Development (Kamloops, BC)",
      date: "Jan 2020 - April 2020",
      desc: ["• Developed prototypes for hybrid mobile applications using React Native, TypeScript & ESlint",
      "• Worked directly under the CTO, and the shareholders on multiple projects contributing in requirement gathering, design, marketing and testing",
      "• Introduced 10+ improvements for CI & CD by researching and introducing libraries like Detox for React Native e2e testing and TravisCI and Jenkins for continuous integration"
      ],
    },
    {
      id: "5",
      title: "Software Developer Co-op",
      company: "USNR (Salmon Arm, BC)",
      date: "May 2019 - Dec 2019",
      desc: [
        "• Contributed to design and development of neural networks for species detection of wood improving the results from 36% accuracy to 94%",
        "• Assisted in requirement gathering, design, development, and documentation for various AI projects using Python, SQL and C#",
        "• Research computer vision developing new applications for our network and did hands-on work with bioluma sensors to understand and improve how data was being collected and used for various neural networks across the company"
      ],
    },
    {
      id: "6",
      title: "Research Assistant",
      company: "Thompson Rivers University (Kamloops, BC)",
      date: "Jan 2019 - April 2019",
      desc: ["• Upgraded basic biology scripts like DNA to RNA conversion and vice versa being used by the professor from Perl to Python", "• Led the coding side of the project. Researched the best approaches that could be incorporated for accurate results with low runtimes"],
    },
    {
      id: "7",
      title: "Teaching Assistant",
      company: "Thompson Rivers University (Kamloops, BC)",
      date: "Sept 2018 - Dec 2018",
      desc: ["• [Python and C#] Assisted the professor with managing evaluations of course assignments, quizzes and development of feedback", "• Tutored students who needed extra help outside classroom hours"],
    },
  ];


  return (
    <motion.div className="card" id="Profile">
      {Data.map((Val) => {
        return (
          <div>
            <motion.div className="row"
            initial={{x: "140%"}}
            animate={{x: 0}}
            transition={{
              delay: 0.1,
              x: { duration: 1 },
              default: { ease: "linear" }
            }}
            exit={{ x: "140%", opacity: 0 }}
            >
          <div className="experience-column-1">
            <h3 className='experience-column-1_text'>{Val.title}</h3>
            <a href="https://www.thindcreatives.co/" className="company-website-experience" target="_blank" rel="noopener noreferrer">{Val.company}</a>
            <p>{Val.date}</p>
          </div>
          <div className="experience-column-2">
            {Val.desc.map((item) => (
                  <div>
                    <p>{item}</p>
                  </div>
                  ))}
          </div>
        </motion.div>
          </div>
            );
            })}
        </motion.div>
  )
}

export default Experience