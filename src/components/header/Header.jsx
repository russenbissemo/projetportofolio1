import React from 'react'
import './Header.css'
import CTA from "./CTA"
import ME from '../../assets/rosbain1.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
     <div className= "container header-container">
      <h5>I'm </h5>
      <h1> Rosbain BISSEMO</h1>
      <h5 className="text-light"> Developer React Js</h5>
      <CTA/>
      <HeaderSocial/>
      <div className='me'>
        <img src ={ME} alt=""/>

      </div>
      <a href ="#contact" className='scroll-down'>Scroll Down</a>
     </div>
    </header>
  )
}

export default Header