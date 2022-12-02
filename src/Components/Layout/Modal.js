import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}

const modal = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: { 
      y: "200px",
      opacity: 1,
      transition: { delay: 0.5 }
    },
  }

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
        { showModal && (
            <motion.div 
            className='backdrop'
            variants={backdrop}
            initial='hidden'
            animate='visible'>
                <motion.div
                    className="modal"
                    variants={modal}>
                        <button className='closeButton'></button>
                            <p>Tera Asbestos</p>
                            <p>Request a quote</p>
                            <form className='quote-form'>
                                <label>Name: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                                <label>Email: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                                <label>Phone: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                                <label>Service Type: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                                <label>Location: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                                <label>Message: 
                                    <input
                                        type='text'
                                        name='username' />
                                </label>
                            </form>
                            <Link to="/">
                            <button>Submit</button>
                            </Link>
                    </motion.div>
                </motion.div>
        )}
    </AnimatePresence>
  )
}

export default Modal