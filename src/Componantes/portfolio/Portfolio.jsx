import React from 'react'
import './portfolio.css'
import IMG1 from 

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article>
          <div className='portfolio_item-image'>

            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>

          </div>
        </article>

      </div>
    </section>
  )
}

export default Portfolio