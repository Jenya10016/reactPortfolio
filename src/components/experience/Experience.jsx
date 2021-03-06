import React from 'react'
import './experience.css'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>React</h4>
              <small className='text-light'>Experienced</small>
            </article>
          </div>  
        </div>

        {/* END OF FRONT END */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>MongoDB</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle />
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
          

        </div>
      </div>  
    </section>
  )
}

export default Experience