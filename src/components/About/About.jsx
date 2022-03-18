import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants'
import './About.scss';

const abouts = [
  { title: 'Desarrollo Front-End', description: 'Creo aplicaciones Web de diseño amigable', imgUrl: images.about01 },
  { title: 'Diseño UX/UI', description: 'Trabajando en mi camino en UX/UI', imgUrl: images.about02 },
  { title: 'AutoDidacta', description: 'Determinado con el buen Diseño Web', imgUrl: images.about03 }
];

const About = () => {
  return (
    <>
      <h2 className='head-text' style={{ color: 'var(--white-color)', fontSize: 'calc(20px + 2vmin)' }}>Sé Que Un <span>Buen Diseño</span><br />Significa Un <span>Buen Negocio</span></h2>

      <div className='app__profiles'>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className='bold-text' style={{ marginTop: 20, fontWeight: 'bold' }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))};
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap (About, 'app__about'), 
  'about', 
  'app__primarybg'
);