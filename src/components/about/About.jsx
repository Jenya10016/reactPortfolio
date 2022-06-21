import React from 'react'
import './about.css'
import ME from '../../assets/jenya.jpg'
import { GiBrain } from 'react-icons/gi'
import { GiThreeFriends } from 'react-icons/gi'
import { FiTool } from 'react-icons/fi'

const about = () => {
  return (
    <section id='about'>
     
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiBrain className='about__icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>

            <article className='about__card'>
              <GiThreeFriends className='about__icon'/>
              <h5>Clients</h5>
              <small>70+ clients</small>
            </article>

            <article className='about__card'>
              <FiTool className='about__icon'/>
              <h5>Projects</h5>
              <small>200+</small>
            </article>
          </div>

          <p>
            I am Jenya Seletsky. I have a degree in business administration from CU Denver.
            I have noticed that most companies I have worked for need web development or updates.
            After years of being a self taught developer, I decided to get my certificate in
            Full Stack development from the University of Denver.
            
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about