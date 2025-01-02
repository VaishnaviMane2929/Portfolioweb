import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/portfolio1.png'
import IMG2 from'../../assets/portfolio.4png.jpg'
import IMG3 from'../../assets/portfolio3.png'
import IMG4 from'../../assets/portfolio5.png'
import IMG5 from'../../assets/portfolio7.png'
import IMG6 from'../../assets/portfolio6.png'



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src="{IMG1}" alt="" />
          </div>
            <h3>This is a portfolio item title</h3>
            <a href="https://github.com/VaishnaviMane2929" className='btn' target='_blank'>GitHub</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>

      </div>
    </section>
  )
}

export default Portfolio