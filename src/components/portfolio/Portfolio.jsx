import React from 'react'
import './portfolio.css'
import IMG from '../../assets/daysched.png'
import IMG1 from '../../assets/weather.png'
import IMG2 from '../../assets/crypto.png'
import IMG3 from '../../assets/codeinmind.png'

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Weather</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jenya10016" className='btn'>Git Hub</a>
            <a href="https://jenya10016.github.io/Weather/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3> Day Scheduler</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jenya10016" className='btn'>Git Hub</a>
            <a href="https://jenya10016.github.io/day_planner/"className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> Subscribe to code and teaching app</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jenya10016" className='btn'>Git Hub</a>
            <a href="https://code-in-mind.herokuapp.com/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Crypto currency and cocktails</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Jenya10016" className='btn'>Git Hub</a>
            <a href="https://prismaticdevs.github.io/crypto-cocktails/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Git Hub</a>
            <a href="https://jenya10016.github.io/Weather/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG} alt="" />
          </div>
          <h3> This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className='btn'>Git Hub</a>
            <a href="https://jenya10016.github.io/Weather/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        </div>
  

    </section>
  )
}

export default portfolio