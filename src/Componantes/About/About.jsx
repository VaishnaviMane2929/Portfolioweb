import React from 'react'
import './about.css'
import ME from '../../assets/self.png'
import { FaAward } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { PiFolderSimpleUserBold } from "react-icons/pi";


const About = () => {
  return (
    <section id='about' >
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className='about_content'>
         <div className='about_cards'>
          <article className='about_card'>
            <FaAward className='about_icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>

          </article>
          <article className='about_card'>
            <LuUsers className='about_icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>

          </article>
          <article className='about_card'>
            <PiFolderSimpleUserBold className='about_icon'/>
            <h5>Projects</h5>
            <small>80+ Comlpeted</small>
          </article>
         </div>
         <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium inventore molestias dolor rem, explicabo qui molestiae magni ad libero quasi consequatur nobis a. Consequatur, asperiores quod quisquam fugiat cumque aperiam nisi ut ex laborum minus veritatis ullam aliquid corrupti dolores similique nihil possimus dolore nostrum officia rem repellat eos excepturi sapiente. Quam modi tempori
         </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
        
      </div>
    </section>
  )
}

export default About