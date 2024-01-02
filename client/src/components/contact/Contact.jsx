import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i5nqsru', 'template_2h6dcuq', form.current, 'ksajRg2zYOFGJBrNv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        <article className='contact_option'>
        <HiOutlineMail className='contact_option-icon'/>
        <h4>Email</h4>
        <h5>jhahv30@gmail.com</h5>
        <a href='mailto:jhahv30@gmail.com' target='_blank' rel='noreferrer'>Send a message</a>
        </article>
        <article className='contact_option'>
        <AiOutlineLinkedin className='contact_option-icon'/>
        <h4>Messanger</h4>
        <h5>Connect Me</h5>
        <a href='https://www.linkedin.com/in/harsh-vardhan-jha-577841242/' target='_blank' rel='noreferrer'>Connect Me</a>
        </article>
        <article className='contact_option'>
        <BsWhatsapp className='contact_option-icon'/>
        <h4>WhatsApp</h4>
        <h5>+91 9110163886</h5>
        <a href='https://api.whatsapp.com/send?phone=919110163886' target='_blank' rel='noreferrer'>Send a message</a>
        </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows="8" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
