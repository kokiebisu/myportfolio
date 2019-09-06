import React from 'react';
import './projects.scss';

import ratemycourse from '../../assets/img/ratemycourse.png';
import card2 from '../../assets/img/card.jpg';

export default () => (
  <div className="projects">
    <h2 className="projects__title">Projects</h2>
    <div className="projects__cards">
      <div className="projects__card projects__card--1">
        <a class="anchor" href="">
          <div>
            <img src={ratemycourse} alt="" />
          </div>
          <h2>ratemycourse</h2>
          <p>Evalute your course. Don't waste time.</p>
          <p>2019/08/27</p>
        </a>
      </div>
      <div className="projects__card projects__card--2">
        <img src={card2} alt="" />
        <h2>Coming soon...</h2>
        <p>Almost there!</p>
      </div>
      <div className="projects__card projects__card--3">
        <img src={card2} alt="" />
        <h2>Coming soon...</h2>
        <p>Almost there!</p>
      </div>
    </div>
  </div>
);
