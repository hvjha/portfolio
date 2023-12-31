import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FiDribbble} from 'react-icons/fi'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href='https://linkedin.com' target="_blank"> <BsLinkedin/></a>
      <a href='https://github.com' target="_blank"> <AiFillGithub/></a>
      <a href='https://instagram.com' target="_blank"> <AiOutlineInstagram/></a>
      <a href='https://dribble.com' target="_blank"> <FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials
