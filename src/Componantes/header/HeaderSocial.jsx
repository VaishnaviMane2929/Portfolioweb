import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkdin.com" target='_blank'><FaLinkedin/></a>
        <a href="https://github.com" target='_blank'>< FaGithub/></a>
        <a href="https://dribble.com" target='_blank'><FiDribbble/></a>


    </div>
  )
}

export default HeaderSocial