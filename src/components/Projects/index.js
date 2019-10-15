import React from 'react';
import './projects.scss';

import ratemycourse from '../../assets/img/ratemycourse.png';

export default () => (
  <div className="projects--container">
    <h2 className="projects__title">Projects</h2>
    <div className="projects">
      <div className="projects__cards">
        <div className="projects__card projects__card--1">
          <a className="anchor" href="">
            <img src={ratemycourse} alt="" />
            <h2>ratemycourse</h2>
            <p>Evalute your course. Don't waste time.</p>
            <p>2019/08/27</p>
          </a>
        </div>
        <div className="projects__card projects__card--2">
          <a className="anchor" href="">
            <img src={ratemycourse} alt="" />
            <h2>Coming soon...</h2>
            <p>Almost there!</p>
          </a>
        </div>
        <div className="projects__card projects__card--3">
          <a className="anchor" href="">
            <img src={ratemycourse} alt="" />
            <h2>Coming soon...</h2>
            <p>Almost there!</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
