import React from 'react'
import './portfolio.css'
import IMG from '../../assets/Amazing.png'
import IMG1 from '../../assets/Note.png'
import IMG2 from '../../assets/Movie.png'
import IMG3 from '../../assets/weather.png'
import IMG4 from '../../assets/dashboard.png'
import IMG5 from '../../assets/Toor.png'

const data =[
  {
    id:1,
    image:IMG,
    title:'Amazing e-commerce platform',
    github:'https://github.com/hvjha/Amazing',
    demo:'https://steady-faloodeh-4efdd1.netlify.app/'
  },
  {
    id:2,
    image:IMG1,
    title:'Sticky Note',
    github:'https://github.com/hvjha/sticky-notes',
    demo:'https://stickynotehvj.netlify.app'
  },
  {
    id:3,
    image:IMG2,
    title:'IMDB Movie clone',
    github:'https://github.com/hvjha/Movie-IMDB',
    demo:'https://658af32f3098faafb9d5c227--friendly-maamoul-678bf1.netlify.app/'
  },
  {
    id:4,
    image:IMG3,
    title:'Weather App',
    github:'https://github.comhttps://github.com/hvjha/Weather-App',
    demo:'https://65848479215c8c2b8a6c9eed--superb-naiad-a31bee.netlify.app/'
  },
  {
    id:5,
    image:IMG4,
    title:'Admin Dashboard',
    github:'https://github.com/hvjha/React-admin-dashboard',
    demo:'https://657581df60517d05e8c11fd2--graceful-hamster-3635a1.netlify.app/'
  },
  {
    id:6,
    image:IMG5,
    title:'Indian Hamsafar Toor and travel',
    github:'https://github.com/hvjha/toor-and-travel',
    demo:'https://658bc9d51eb607319ec8b3c5--grand-melomakarona-a9adb8.netlify.app/'
  }
  
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio_container">
         {
          data.map(({id, image,title,github,demo})=>(
            <article key={id} className="portfolio_item">
            <div className="portfolio_item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
           <div className="portfolio_item-cta">
            <a href={github} className='btn' target='_blank'rel="noreferrer">Github</a>
            <a href={demo} className='btn btn-primary' target="_blank"rel="noreferrer">Live Demo</a>
           </div>
          </article>
          ))
         }
        </div>
    </section>
  )
}



export default Portfolio
