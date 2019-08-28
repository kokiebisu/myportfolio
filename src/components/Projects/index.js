import React from 'react';
import './projects.scss';

import card1 from '../../assets/img/card.jpg';

export default () => (
  <div className="projects">
    <h2 className="projects__title">Projects</h2>
    <div className="projects__cards">
      <div className="projects__card projects__card--1">
        <img src={card1} alt="" />
        <h2>ratemycourse</h2>
        <p>Evalute your course. Don't waste time.</p>
        <p>2019/08/27</p>
      </div>
      <div className="projects__card projects__card--2">
        <img src={card1} alt="" />
        <h2>Coming soon...</h2>
        <p>Almost there!</p>
      </div>
      <div className="projects__card projects__card--3">
        <img src={card1} alt="" />
        <h2>Coming soon...</h2>
        <p>Almost there!</p>
      </div>
    </div>
  </div>
);
