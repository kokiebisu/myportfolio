import React from 'react';
import './about.scss';

import avatar from '../../assets/img/profile.jpg';

export default () => (
  <main className="main">
    <div className="main__left">
      <div className="main__general">
        <h2 className="main__title">About</h2>
        <div className="main__general--top">
          <div className="main__avatar">
            <img
              className="main__avatar--image"
              src={avatar}
              alt="Profile Image"
              border="7px"
            />
          </div>
          <div className="main__hash__container--top">
            <div className="main__hash__container">
              <p className="main__hash main__hash--1"># passionate</p>
              <p className="main__hash main__hash--2"># motivated</p>
              <p className="main__hash main__hash--3"># friendly</p>
              <p className="main__hash main__hash--4"># creative</p>
              <p className="main__hash main__hash--5"># confident</p>
            </div>
          </div>
        </div>
        <div className="main__description">
          <p className="main__description--text">
            Hi there. I'm Ken. Currently enrolled in the CST program at BCIT.
            <span>
              I love playing the guitar and enjoying music during my free time.
            </span>
          </p>
        </div>
      </div>
    </div>
    <div className="main__center"></div>
    <div className="main__right">
      <div className="main__timeline">
        <div className="main__timeline__circle main__timeline__circle--1"></div>
        <div className="main__timeline--event main__timeline--event--1">
          <h2>Past</h2>
          <p>Studied Political Science 🎓</p>
        </div>
        <div className="main__timeline__circle main__timeline__circle--2"></div>
        <div className="main__timeline--event main__timeline--event--2">
          <h2>Present</h2>
          <p>Studying at BCIT 👨‍💻</p>
        </div>
        <div className="main__timeline__circle main__timeline__circle--3"></div>
        <div className="main__timeline--event main__timeline--event--3">
          <h2>Future</h2>
          <p>Get a job in Vancouver 😄</p>
        </div>
      </div>
    </div>
  </main>
);
