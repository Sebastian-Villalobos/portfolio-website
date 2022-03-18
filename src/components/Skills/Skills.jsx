import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { skill, experience } from '';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setExperiences();
    setSkills()
  }, []);

  return (
    <>
      <h2 className='head-text'>Habilidades & Experiencias</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
        
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(Skills, 'skills');