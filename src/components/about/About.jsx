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
             Illum corporis rerum eum libero praesentium facilis eligendi quas eaque qui ex pariatur est repellat, quaerat architecto reprehenderit eos dignissimos, dicta quos beatae recusandae animi necessitatibus expedita nobis tenetur! In incidunt veritatis, praesentium aperiam esse explicabo possimus quam officia consequuntur aliquid accusantium recusandae, nostrum eveniet rem doloremque, perferendis impedit laudantium fuga? Architecto illo sed delectus id pariatur nobis. Dicta quas sunt, architecto alias, fuga iure quos nihil velit voluptatem minima dolorem eligendi eos deserunt vero nemo quod mollitia debitis. Ducimus aut facere ipsam ipsum iusto, praesentium minima ea delectus quo esse. Optio.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default about