import React from 'react'
import './portfolio.css'
import IMG1 from'../../assets/portfolio1.png'
import IMG2 from'../../assets/portfolio.4png.jpg'
import IMG3 from'../../assets/portfolio3.png'
import IMG4 from'../../assets/portfolio5.png'
import IMG5 from'../../assets/portfolio7.png'
import IMG6 from'../../assets/portfolio6.png'


const data=[

  {
    id:1,
    image:IMG1,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },{
    id:2,
    image:IMG2,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },{
    id:3,
    image:IMG3,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },{
    id:4,
    image:IMG4,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },{
    id:5,
    image:IMG5,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },
  {
    id:6,
    image:IMG6,
    title:'this is my game website',
    github:'https://github.com/VaishnaviMane2929',
    demo:'https://dribbble.com/Alien_pixels',
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo}) => {
            return (
              <article key={id} className='portfolio_item'>
              <div className='portfolio_item-image'>
                <img src={image} alt="title" />
              </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                <a href={github} className='btn' target='_blank'>GitHub</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
       
         

      </div>
    </section>
  )
}

export default Portfolio