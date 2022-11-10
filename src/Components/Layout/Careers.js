import React from 'react';
import '../css/Careers.css';

const Careers = () => {
  return (
    <div className='card'>
      <div className='row-card'>
        <h3 className='title'>Interested in working here?</h3>
      </div>
      <div className='row-card'>
        <h3 className='sub-title'>Come create a better future with us!</h3>
      </div>
      <div className='row-card'>
        <p>Our application process at Cityview is simple and straightforward. If you spot a position you're interested in, just complete our short application.</p>
      </div>
      <div className='n-row-card'>
        <p>A member of our team will look through your application and CV and reach out to you to schedule a meeting. This is not only your first moment to put your best foot forward, but also a moment to ask questions about your role, future opportunities, and judge if its the right fit.</p>
      </div>
      <div className='row-card'>
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
      </div>
    </div>
  )
}

export default Careers