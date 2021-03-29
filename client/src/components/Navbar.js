import React from 'react'

const Navbar = () => {
    return (
        <div className="side" data-aos="flip-up" data-aos-delay="300" data-aos-duration="10000" data-aos-offset="600">
    <nav className="nav flex-column navbar-light">
      <button type="button" className="btn "><a className="nav-link nav-text-color " href="#profile" role="button">Profile</a></button>
      <button type="button" className="btn "> <a className="nav-link nav-text-color" href="#education" role="button">Education</a></button>
      <button type="button" className="btn "><a className="nav-link nav-text-color" href="#skills" role="button">Skills</a></button>
      <button type="button" className="btn "><a className="nav-link nav-text-color " href="#achievements" role="button">Achievements</a></button>
      <button type="button" className="btn "><a className="nav-link nav-text-color " href="#projects" role="button">Projects</a></button>
      <button type="button" className="btn "><a className="nav-link nav-text-color " href="#contact" role="button">Contact</a></button>
    </nav>
    <div className="side-bottom">
      <a href="#top"><i className="fa fa-arrow-circle-up fa-4x"></i></a>
    </div>
  </div>
    )
}

export default Navbar
