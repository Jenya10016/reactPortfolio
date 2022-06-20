import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { SiAboutdotme } from 'react-icons/si'
import { FaRegLightbulb } from 'react-icons/fa'
import { BsBook } from 'react-icons/bs'
import { MdOutlineContactMail } from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaRegLightbulb/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} 
      className={activeNav === '#contact' ? 'active' : ''}><MdOutlineContactMail/></a>
    </nav>
  )
}

export default Nav