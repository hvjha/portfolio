import React from 'react'
import './testimonial.css'
import AVTAR from '../../assets/avatar1.jpg'
import AVTAR1 from '../../assets/avatar2.jpg'
import AVTAR2 from '../../assets/avatar3.jpg'
import AVTAR3 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTAR,
    name:'Harsh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque ullam corrupti qui illo, blanditiis voluptas repellat dicta aperiam architecto placeat consequuntur, eligendi explicabo. Fuga odio quam mollitia! Dolores, iure id?,Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTAR1,
    name:'Harsh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque ullam corrupti qui illo, blanditiis voluptas repellat dicta aperiam architecto placeat consequuntur, eligendi explicabo. Fuga odio quam mollitia! Dolores, iure id?,Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTAR2,
    name:'Harsh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque ullam corrupti qui illo, blanditiis voluptas repellat dicta aperiam architecto placeat consequuntur, eligendi explicabo. Fuga odio quam mollitia! Dolores, iure id?,Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
  {
    avatar:AVTAR3,
    name:'Harsh',
    review:' Lorem ipsum dolor sit amet consectetur adipisicing elit.Cumque ullam corrupti qui illo, blanditiis voluptas repellat dicta aperiam architecto placeat consequuntur, eligendi explicabo. Fuga odio quam mollitia! Dolores, iure id?,Lorem ipsum dolor sit amet consectetur adipisicing elit'
  },
]
const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
       modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar,name,review},index) =>(
          <SwiperSlide className="testimonial">
        <div className="client_avatar">
          <img src={avatar} alt=''/>
          </div>
          <h5 className='client_name'>{name}</h5>
          <div className='client_review'>
           {review}
          </div>
        
      </SwiperSlide>
        ))
      }
      </Swiper>
    </section>
  )
}

export default Testimonial
