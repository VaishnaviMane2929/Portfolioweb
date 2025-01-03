import React from 'react'
import './contact.css'
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";



const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_option'>
          <article className='contact_option'>
            <MdOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>vaishu991@gmail.com</h5>
            <a href="mailto:welcome@gmail.com"target='_blank'>Send Message</a>

          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>egatotutorials</h5>
            <a href="https://www.instagram.com/" target='_blank'>Send Message</a>

          </article>
          <article className='contact_option'>
            <FaWhatsapp className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>+9699978033</h5>
            <a href="https://api.whatsapp.com/send?phone+9699978033"target='_blank'>Send Message</a>

          </article>
        </div>
        {/* ==========end of contact option========== */}
        <form action="">
          <input type="text" name='Name' placeholder='Your Full Name:' required/>
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="Message" rows="7" placeholder='Your Message' required></textarea>
          <button type='Submit' className='btn btn-primary'>Send Message</button>

        </form>

      </div>
    </section>
  )
}

export default Contact