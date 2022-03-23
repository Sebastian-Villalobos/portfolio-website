import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const form = useRef();
  const [finished, setFinished] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    
  }

  return (
    <>
      <h2 className='head-text'>Envíame un mensaje</h2>

      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <img src={images.email} alt='email' />
          <a href='mailto:sebastian.villalob@gmail.com' className='p-text'>sebastian.villalob@gmail.com</a>
        </div>
        <div className='app__footer-card'>
          <img src={images.mobile} alt='phone' />
          <a href='tel:+54 (3751) 57-7325' className='p-text'>+54 (3751) 57-7325</a>
        </div>
      </div>
    </>
  )
}

export default Footer