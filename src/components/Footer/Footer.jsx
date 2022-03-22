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
    <div>Footer</div>
  )
}

export default Footer