import React from 'react'
import './nav.css'
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="# "  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>
      <TiHomeOutline/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaRegUser/> </a>
    <a href="#experience"  onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><RiBook2Line/></a>
    <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageAltDetail /></a>
   </nav>
  )
}

export default Nav