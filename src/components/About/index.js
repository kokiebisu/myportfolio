import React from 'react';
import './about.scss';

import avatar from '../../assets/img/profile-img4.jpg';

export default () => (
  <main class="main">
    <div class="main__left">
      <div class="main__general">
        <div class="main__avatar">
          <img
            class="main__avatar--image"
            src={avatar}
            alt="Profile Image"
            border="7px"
          />
        </div>
        <div class="main__hash--container">
          <p class="main__hash main__hash--1"># passionate</p>
          <p class="main__hash main__hash--2"># motivated</p>
          <p class="main__hash main__hash--3"># friendly</p>
          <p class="main__hash main__hash--4"># creative</p>
          <p class="main__hash main__hash--5"># confident</p>
        </div>
      </div>
      <div class="main__description">
        <p class="main__description--text">
          Hi there. I'm Ken. I came to Vancouver last year to study at British
          Columbia Institute of Technology. I love playing the guitar and
          enjoying music during my free time.
        </p>
      </div>
    </div>
    <div class="main__center"></div>
    <div class="main__right">
      <div class="main__timeline">
        <div class="main__timeline__circle main__timeline__circle--1"></div>
        <div class="main__timeline--event main__timeline--event--1">
          <h2>Past</h2>
          <p>Studied Political Science 🎓</p>
        </div>
        <div class="main__timeline__circle main__timeline__circle--2"></div>
        <div class="main__timeline--event main__timeline--event--2">
          <h2>Present</h2>
          <p>Studying at BCIT 👨‍💻</p>
        </div>
        <div class="main__timeline__circle main__timeline__circle--3"></div>
        <div class="main__timeline--event main__timeline--event--3">
          <h2>Future</h2>
          <p>Hoping to get a job in Vancouver 😄</p>
        </div>
      </div>
    </div>
  </main>
);
