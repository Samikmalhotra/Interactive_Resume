import React from 'react'
import {Link} from 'react-scroll'


const Navbar = () => {
    return (
        <div className="side" data-aos="flip-up" data-aos-delay="300" data-aos-duration="10000" data-aos-offset="600">
    <nav className="nav flex-column navbar-light">
      <button type="button" className="btn "><Link className="nav-link nav-text-color " spy = {true} to="profile" role="button">Profile</Link></button>
      <button type="button" className="btn "> <Link className="nav-link nav-text-color" spy = {true} to="education" role="button">Education</Link></button>
      <button type="button" className="btn "><Link className="nav-link nav-text-color" spy = {true} to="skills" role="button">Skills</Link></button>
      <button type="button" className="btn "><Link className="nav-link nav-text-color " spy = {true} to="achievements" role="button">Achievements</Link></button>
      <button type="button" className="btn "><Link className="nav-link nav-text-color " spy = {true} to="projects" role="button">Projects</Link></button>
      <button type="button" className="btn "><Link className="nav-link nav-text-color " spy = {true} to="contact" role="button">Contact</Link></button>
    </nav>
    <div className="side-bottom">
      <Link href="top"><i className="fa fa-arrow-circle-up fa-4x"></i></Link>
    </div>
  </div>
    )
}

export default Navbar
