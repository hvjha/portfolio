import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Harsh</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonial'>Testimonial</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_socials'>
      <a href='https://linkedin.com' target="_blank"> <BsLinkedin/></a>
      <a href='https://github.com' target="_blank"> <AiFillGithub/></a>
      <a href='https://instagram.com' target="_blank"> <AiOutlineInstagram/></a>
    </div>

    <div className="footer_copyright">
      <small>
        &copy;H V Jha.All rights reserved
      </small>
    </div>
    </footer>
  )
}

export default Footer
