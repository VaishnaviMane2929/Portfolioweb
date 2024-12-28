import React from 'react'
import Untitled from "../../assets/Untitled.pdf";

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Untitled} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

    </div>
  )
}

export default CTA