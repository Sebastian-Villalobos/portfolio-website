import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { ability } from '../../constants/ability';
import { experience } from '../../constants/experience';
import './Skills.scss';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    setExperiences(experience);
    setAbilities(ability)
  }, []);

  return (
    <>
      <h2 className='head-text'>Habilidades & Experiencias</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {abilities.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className='app__skills-item app__flex'
              key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={skill.icon} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className='app__skills-exp'>
          {experiences.map((exp) => (
            <motion.div
              className='app__skills-exp-item'
              key={exp.year}
            >
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{exp.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {exp.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.companyOrCourse}</p>
                    </motion.div>
                    <ReactTooltip 
                      id={work.name}
                      effect='solid'
                      arrowColor='#fff'
                      className='skills-tooltip'
                    >
                      {work.desc}
                    </ReactTooltip>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap (Skills, 'app__skills'), 
  'habilidades', 
  'app__primarybg'
);