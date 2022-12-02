import React from 'react';
import '../css/Careers.css';

const Careers = () => {
  return (
    <div className='card'>
      <div className='row-card-careers'>
        <h2 className='row-card-main-title'>Interested in working here?</h2>
        <h3 className='sub-title'>Come grow yourself with us!</h3>
        <p>Our application process at Tera is simple and straightforward. If you spot a position you're interested in, just complete our short application.</p>
        <p>A member of our team will look through your application and CV and reach out to you to schedule a meeting. This is not only your first moment to put your best foot forward, but also a moment to ask questions about your role, future opportunities, and judge if its the right fit.</p>  
      </div>
      <div className='row-card'>
          <form className='quote-form'>
            <div class="row">
              <div class="col-25">
                <label for="fname">First Name</label>
              </div>
              <div class="col-75">
                <input
                  type="text" 
                  id="fname" 
                  name="firstname" 
                  placeholder="Your name.." />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="lname">Last Name</label>
              </div>
              <div class="col-75">
                <input 
                  type="text" 
                  id="lname" 
                  name="lastname" 
                  placeholder="Your last name.." />
              </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Cover Letter</label>
              </div>
              <div class="col-75">
              <textarea
                  id="review-text"
                  placeholder="Send us a message"
                  rows={1}
                />
                </div>
            </div>
            <div class="row">
              <div class="col-25">
                <label for="subject">Resume</label>
              </div>
              <div class="col-75">
                <React.Fragment>
                  <button onClick={() => this.refs.fileInput.click()}>Upload File</button>
              </React.Fragment>
              </div>
            </div>
            <br />
            <div class="row">
              <div className='col-btn'>
                <input 
                  type="submit" 
                  value="Submit" />
              </div>
            </div>
          </form>
        </div>
      </div>
  )
}


export default Careers