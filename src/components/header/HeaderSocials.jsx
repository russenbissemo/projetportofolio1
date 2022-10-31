import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header-socials'>
       <a href ="https://linkedin.com" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href ="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href ="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
   
    </div>
  )
}

export default HeaderSocials