import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/myself2.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
   <header>
    
    <div className="container header_container">
      
      <h5>Hello I'm</h5>
      <h5 className='text-light'>Frontend Developer</h5>

      <h1>Mane Vaishnavi</h1>
      <CTA/>
      {/* <h5 className='text-light'>Frontend Developer</h5> */}
      {/* <Untitled/> */}
      <HeaderSocial/>

      <div className='me'>
      <img src={ME} alt="me" />
    </div>

    <a href="#contact" className='scoll_down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default Header