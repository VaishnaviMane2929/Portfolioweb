import React from 'react'
import './footer.css'
import { GrInstagram } from "react-icons/gr";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Experience</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Testimonials</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://www.instagram.com/vaishnavi_mane242/"><GrInstagram/></a>
        <a href="https://github.com/VaishnaviMane2929"><SiGithub/></a>
        <a href="https://www.linkedin.com/in/vaishnavi-mane-a415a633a/"><FaLinkedin/></a>
      </div>
      <div className='footer_socials'>
        <small>&copy; EGATOR Tutorials. All right reserved</small>


      </div>
    </footer>
  )
}

export default Footer