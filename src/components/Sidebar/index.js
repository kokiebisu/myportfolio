import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Sandbox } from '../../assets/svg/SVG/codesandbox.svg';
import { ReactComponent as Headphones } from '../../assets/svg/SVG/headphones.svg';
import { ReactComponent as Heart } from '../../assets/svg/SVG/heart.svg';
import './sidebar.scss';

// import sandbox from '../../assets/svg/sprite.svg#icon-codesandbox';
// import headphones from '../../assets/svg/sprite.svg#icon-headphones';
// import heart from '../../assets/svg/sprite.svg#icon-heart';

export default () => {
  return (
    <nav class="sidebar">
      <ul class="side-nav">
        <li class="side-nav__item">
          <Link to="/about" class="side-nav__link">
            <div className="side-nav__icon">
              <Sandbox />
            </div>
            <span class="side-nav__text">About Me</span>
          </Link>
        </li>
        <li class="side-nav__item">
          <Link to="/projects" class="side-nav__link">
            <div className="side-nav__icon">
              <Headphones />
            </div>
            <span class="side-nav__text">Projects</span>
          </Link>
        </li>
        <li class="side-nav__item">
          <Link class="side-nav__link">
            <div className="side-nav__icon">
              <Heart />
            </div>
            <span class="side-nav__text">Hopefully Soon...</span>
          </Link>
        </li>
      </ul>
      <legal class="legal">
        Created by <br />
        Kenichi Okiebisu
      </legal>
    </nav>
  );
};
