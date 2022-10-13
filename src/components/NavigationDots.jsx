import React from 'react';

const NavigationDots = ({ active }) => (
  <div className='app__navigation'>
      {['inicio', 'sobre mí', 'trabajo', 'habilidades', 'contacto'].map((item, index) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a 
              href={`#${item}`}
              key={item + index} 
              className='app__navigation-dot'
              style={active === item ? { backgroundColor: 'var(--secondary-color)' } : {}}
          />
      ))}
  </div>
);

export default NavigationDots;