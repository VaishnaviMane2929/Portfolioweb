import React from 'react'
import Header from './Componantes/header/Header'
import Nav from './Componantes/nav/Nav'
import About from './Componantes/About/About'
import Experience from './Componantes/experience/Experience'
import Services from './Componantes/services/Services'
import Portfolio from './Componantes/portfolio/Portfolio'
import Testimonials from './Componantes/testimonials/Testimonials'
import Contact from './Componantes/contact/Contact'
import Footer from './Componantes/footer/Footer'

const App = () => {
  return (
    <>
    
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App