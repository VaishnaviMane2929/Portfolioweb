import React from 'react'
import './nav.css'
import { TiHomeOutline } from "react-icons/ti";
import { FaRegUser } from "react-icons/fa";
import { RiBook2Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageAltDetail } from "react-icons/bi";

const Nav = () => {
  return (
   <nav>
    <a href="# home"><TiHomeOutline/></a>
    <a href="# about"><FaRegUser/> </a>
    <a href="# experience"><RiBook2Line/></a>
    <a href="# services"><RiServiceLine/></a>
    <a href="# contact"><BiMessageAltDetail/></a>
   </nav>
  )
}

export default Nav