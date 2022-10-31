import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>

      <h5> get to Know</h5>
      <h2> About me </h2>

      <div className=' container about-container'>
        <div className='about-me'>
          <div className ="about-me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className='about-content'> 
          <div className='about-cards'>
            
            <article className='about-card'>
              <FaAward className='About-icon'/>
              <h5> Experience</h5>
              <small> 1 Year Experience</small>
            </article>

            <article className='about-card'>
              <FaAward className='About-icon'/>
              <h5> Experience</h5>
              <small> 1 Year Experience</small>
            </article>

            <article className='about-card'>
              <FaAward className='About-icon'/>
              <h5> Experience</h5>
              <small> 1 Year Experience</small>
            </article>
          </div>

        </div>

      </div>
    
    </section>
  )
}

export default About