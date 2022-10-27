import React from 'react'
import './Header.css'
import CTA from "./CTA"

const Header = () => {
  return (
    <header>
     <div className= "container.header_container">
      <h5>Hello</h5>
      <h1> Rosbain BISSEMO</h1>
      <h5 className="text-light"> Developper React Js</h5>
      <CTA/>

     </div>
    </header>
  )
}

export default Header