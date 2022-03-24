import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss';

const Footer = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [formSent, setformSent] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    emailjs.sendForm(
      'service_r1mj4ph',
      'template_yf5u1ao',
      formRef.current,
      'FxuWNv3J3fKQPxGzV'
    ).then(
      (result) => {
        console.log(result.text);
        setLoading(false);
        setformSent(true);
    }, 
      (error) => {
        console.log(error.text);
      });
  };

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
      {!formSent ? (
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='app__flex'>
            <input className='p-text-b' type='text' placeholder='Tu Nombre' name='user_name' />
          </div>
          <div className='app__flex'>
            <input className='p-text-b' type='text' placeholder='Asunto' name='user_subject' />
          </div>
          <div className='app__flex'>
            <input className='p-text-b' type='email' placeholder='Tu Email' name='user_email' />
          </div>
          <div>
            <textarea className='p-text-b' placeholder='Tu Mensaje' name='message' />
          </div>
          <button type='submit' className='p-text'>{!loading ? 'Enviar Mensaje' : 'Enviando...'}</button>
        </form>
      ) : (
        <div>
          <h3 className='head-text'>
            ¡Gracias por contactarte!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__primarybg',
);