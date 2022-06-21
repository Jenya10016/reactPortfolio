import React from 'react'
import './footer.css'
import { AiOutlineLinkedin } from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"> Jenya Seletsky</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/Jenya10016"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/jenyaseletsky/"><AiOutlineLinkedin/></a>
        
      </div>

      <div className="footer__copyright">
<small>&copy; 2022 Jenya Seletsky. All rights reserved.</small>
       </div> 
        
      </footer>
  )
}

export default Footer