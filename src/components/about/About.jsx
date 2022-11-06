import React from 'react'
import "./About.css"
import ME from '../../assets/rosbain3.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>

      <h5> get to Know</h5>
      <h2> About me </h2>

      <div className=' container about-container'>
        <div className='about-me'>
          <div className ="about-me-im">
            <img src={ME} alt="About Portrait"/>
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
              <FiUsers className='About-icon'/>
              <h5>clients</h5>
              <small>3</small>
            </article>

            <article className='about-card'>
              <VscFolderLibrary className='About-icon'/>
              <h5>Projects</h5>
              <small>3 Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium ipsum ullam dolorum vero quia provident beatae illo, laborum sint
          </p>
          <a href = "#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    
    </section>
  )
}

export default About