import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from "react-icons/bs";
// import { TbRosetteDiscountCheckFilled } from "react-icons/tb";



const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience_frontend'> 
          <h3>Frontend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experience</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
              <div> <h4>CSS</h4>
            <small className='text-light'>Experience</small>
           </div>
              </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>JavaScript</h4>
            <small className='text-light'>Experience</small>
           </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
            <div><h4>Bootstrap</h4>
            <small className='text-light'>Experience</small>
           </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
            <div><h4>Tailwind</h4>
            <small className='text-light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>React js</h4>
           <small className='text-light'>Experience</small></div>
            </article>
          </div>
        </div>


        {/* ==============end the frontend===============  */}

        <div className='experience_backend'>
        <h3>Backend Development</h3>
          <div className='experience_content'>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>MobgoDb</h4>
           <small className='text-light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>Node JS</h4>
           <small className='text-light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
            <div><h4>PHP</h4>
            <small className='text-light'>Experience</small></div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>MySQL</h4>
           <small className='text-light'>Experience</small></div>
            </article> 
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details-icon' />
           <div> <h4>Java</h4>
           <small className='text-light'>Experience</small></div>
            </article>
            
          </div>
         </div>
       

        </div>

      
    </section>
  )
}

export default Experience