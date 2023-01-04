import { React, useEffect, useState } from 'react';
import '../css/Profile.css'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Icons import
import Img1 from '../Icons/FelixThindBGRem.png';
import Img2 from '../Icons/FelixThindBGRemFilm.png'
import LocationIcon from '../Icons/location.svg';



const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exiting: { opacity: 0 }
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
          return 0;
        }
        return prevValue + 1;
      });
    }, 5000);
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
            strings: ['Everything!', 'Everyone!', 'Everywhere!',],
            autoStart: true,
            loop: true,
            }}
          />
      </h1>
      
      </div>
      <div className="profile__row">
        <div className='profile__column1'>
          <div className="image-cropper">
            {/* <img src={ Img } alt = "My portfolio pic" /> */}
            <MotionConfig transition={{ type: "tween", duration: 2 }}>
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
        </div>
      </div>
      </motion.div>
    </>
  );
}


export default Profile;