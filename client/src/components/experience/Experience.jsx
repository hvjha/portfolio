import React from 'react'
import {BsFillPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skill I have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>JavaScript</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>BootStrap</h4>
            <small className='text-light'>Experienced</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>React</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
          </div>
        </div>
        {/* End of Frontend */}

        <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>Node Js</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>Express</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>MongoDB</h4>
            <small className='text-light'>InterMediate</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>MySQL</h4>
            <small className='text-light'>Beginner,</small>
            </div>
            </article>
            <article className='experience_details'>
            <BsFillPatchCheckFill className='experience_details_icons'/>
            <div>
            <h4>Python</h4>
            <small className='text-light'>Just Started</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
