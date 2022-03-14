import React from 'react';
import { motion } from 'framer-motion';

import { images } from '../../constants'
import './About.scss';

const abouts = [
  { title: 'Front-End Web Development', description: 'I am a good Front-End Developer.', imgUrl: images.about01 },
  { title: 'UX/UI Design', description: 'I am working on my UX/UI road', imgUrl: images.about02 }
];

const About = () => {
  return (
    <>
      <h2 className='head-text'>Sé Que Un <span>Buen Diseño</span><br />Significa Un <span>Buen Negocio</span></h2>

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
            <h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
            <p className='p-text' style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About;