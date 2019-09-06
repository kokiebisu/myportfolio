import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Sandbox } from '../../assets/svg/SVG/codesandbox.svg';
import { ReactComponent as Headphones } from '../../assets/svg/SVG/headphones.svg';
import { ReactComponent as Heart } from '../../assets/svg/SVG/heart.svg';
import './sidebar.scss';

import react from '../../assets/img/react.png';
import grommet from '../../assets/img/grommet.png';
import generator from '../../assets/img/generator.png';

// import sandbox from '../../assets/svg/sprite.svg#icon-codesandbox';
// import headphones from '../../assets/svg/sprite.svg#icon-headphones';
// import heart from '../../assets/svg/sprite.svg#icon-heart';

export default () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item">
          <Link to="/about" className="side-nav__link">
            <div className="side-nav__icon">
              <Sandbox />
            </div>
            <span className="side-nav__text">About Me</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/projects" className="side-nav__link">
            <div className="side-nav__icon">
              <Headphones />
            </div>
            <span className="side-nav__text">Projects</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/skills" className="side-nav__link">
            <div className="side-nav__icon">
              <Heart />
            </div>
            <span className="side-nav__text">Skills</span>
          </Link>
        </li>
      </ul>
      <div className="legal">
        Created with <br />
        <div>
          <a href="https://github.com/facebook/react">
            <img src={react} alt="" className="legal__img legal__img--1" />
          </a>
          <a href="https://v2.grommet.io/">
            <img src={grommet} alt="" className="legal__img legal__img--2" />
          </a>
          <a href="https://www.gradient-animator.com/">
            <img src={generator} alt="" className="legal__img legal__img--3" />
          </a>
        </div>
      </div>
    </nav>
  );
};
