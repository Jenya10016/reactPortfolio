import React from 'react'
import './portfolio.css'
import IMG from '../../assets/daysched.png'
import IMG1 from '../../assets/weather.png'
import IMG2 from '../../assets/crypto.png'
import IMG3 from '../../assets/codeinmind.png'
import IMG4 from '../../assets/ProjectMS.png'
import IMG5 from '../../assets/quiz.png'


const data = [
  {
    id: 1,
    image: IMG,
    title: 'Day Schedule',
    github: 'https://github.com/Jenya10016/day_planner',
    demo: 'https://jenya10016.github.io/day_planner/',
  },
  {
    id: 2,
    image: IMG1,
    title: 'Weather App',
    github: 'https://github.com/Jenya10016/Weather',
    demo: 'https://jenya10016.github.io/Weather//',
  },
  {
    id: 3,
    image: IMG2,
    title: 'Cryto & Currency',
    github: 'http://github.com/',
    demo: 'https://prismaticdevs.github.io/crypto-cocktails/',
  },
  {
    id: 4,
    image: IMG3,
    title: 'Code in Mind - Education App',
    github: 'https://github.com/Jenya10016/code_in_mind',
    demo: 'https://code-in-mind.herokuapp.com/',
  },
  {
    id: 5,
    image: IMG4,
    title: 'Project Management',
    github: 'https://github.com/Jenya10016/proManagementSyst',
    demo: 'https://judo2000-project-mgnt.herokuapp.com/',
  },
  {
    id: 6,
    image: IMG5,
    title: 'Day Schedule',
    github: 'https://github.com/Jenya10016/reactPortfolio',
    demo: 'https://jenya10016.github.io/quiz/',
  },
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3> {title}</h3>
                <div className="portfolio__item-cta">
                  <a href="{github}" className='btn' target='_blank'>Git Hub</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
        </div>
    </section>
  )
}
    


    export default portfolio