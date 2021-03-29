import React, { Fragment } from 'react'

const Profile = () => {
    return (
        <Fragment>
            <div className="profile">
    {/* <a name="profile"></a> */}
    <div className="main">

      <h1 className="main-heading" data-aos="fade-right" data-aos-duration="1000">Profile</h1>
      {/* <h4 data-aos="fade-right" data-aos-duration="1000" style="text-align:center; color:#838383; margin:30px;">I'm a front-end web developer</h4> */}
      <hr className="main-hr"/>
      <div className="row ">
        <div className="col-lg-4 text-left" data-aos="zoom-out-right" data-aos-delay="200">
          <h4 className="about-me-details-heading">About Me</h4>
          <p className="about-me-details-text" >
            I am outgoing, dedicated, and open-minded. I get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new things all the time.
          </p>
        </div>
        <div className="col-lg-4 text-left"  data-aos="zoom-out-down" data-aos-delay="400">
          <img src="Samik Malhotra6.jpg" className="profile-photo" alt=''/>
        </div>
        <div className="col-lg-4 text-left"  data-aos="zoom-out-left" data-aos-delay="600">
          <h4 className="about-me-details-heading">Details</h4>
          <p className="about-me-details-text">
          <b>Name:</b><br />
          Samik Malhotra<br />
          <b>Age:</b><br />
          18<br />
          <b>Location:</b><br />
          Delhi, India, Earth<br />
          </p>
        </div>
      </div>
    </div>
  </div>
        </Fragment>
    )
}

export default Profile
