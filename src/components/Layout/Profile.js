import { React, useEffect, useState } from 'react';
import '../css/Profile.css'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Icons import
import Img1 from '../Icons/FelixThindBGRem.png';
import Img2 from '../Icons/FelixThindBGRemFilm.png'
import LocationIcon from '../Icons/location.svg';

import Loader from './Loader';





const variants = {
  hidden: { opacity: 0, x: 500 },
  visible: { opacity: 1, x: 0 },
  exiting: { opacity: 0, x: 500 }
};

const images = [Img1, Img2];


function Profile() {


  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (selectedImage === 1) {
        setSelectedImage(0);
        return;
      }
      setSelectedImage((prevValue) => {
        if (prevValue === 1) {
          return 1;
        }
        return prevValue + 1;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, []);


  return (
    <>
    <motion.div className="card" id="Profile"
    initial={{x: "100%"}}
    animate={{x: 0}}
    transition={{
      delay: 0.1,
      x: { duration: 1 },
      default: { ease: "linear" }
    }}
    exit={{ x: "100%", opacity: 0 }}
    >
      <div className="profile-header">
      <h1>
        <Typewriter
          options={{
            autoStart: true,
            }}
            onInit={(typewriter) => {
              typewriter.typeString('Everything! ')
                .pauseFor(1500)
              typewriter.typeString('Everywhere! ')
                .pauseFor(1500)
              typewriter.typeString('Everyone!')
                .start();
            }}
          />
      </h1>
      
      </div>
      <div className="profile__row">
        <div className='profile__column1'>
          <div className="image-cropper">
            <MotionConfig transition={{ type: "tween", duration: 0.5 }}>
              <AnimatePresence initial={false} mode="wait">
                {images.map(
                  (image, index) =>
                    index === selectedImage && (
                      <motion.img
                        className="image123"
                        key={image}
                        style={{ y: 0 }}
                        initial="hidden"
                        animate="visible"
                        exit="exiting"
                        variants={variants}
                        src={image}
                        alt="src"
                      />
                    )
                )}
              </AnimatePresence>
            </MotionConfig>
          </div>
        </div>
        <div className='profile__column2'>
          <h1 className='CEO__title'>Name: Felix Thind</h1>
            <div className='img__cropper_text'>
              <p>Software Developer | Business | Tech</p>
              <p className='img__cropper_p'>Surrey, BC</p>
              <br />
              <p className='profile__column2_text'>Feel free to browse through my experience, projects or resume</p>
            </div>
          </div>
      </div>
      <div className="profile__row2">
      </div>
      
      </motion.div>
    </>
  );
}


export default Profile;