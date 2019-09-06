import React from 'react';
import './bar.scss';

import button1 from '../../assets/img/button1.png';
import button2 from '../../assets/img/button2.png';
import button3 from '../../assets/img/button3.png';

export default () => (
  <header className="bar">
    <img src={button1} alt="" className="button__img button__img--1" />
    <img src={button2} alt="" className="button__img button__img--2" />
    <img src={button3} alt="" className="button__img button__img--3" />
  </header>
);
