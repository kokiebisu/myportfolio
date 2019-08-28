import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { ReactComponent as Sandbox } from '../../assets/svg/SVG/codesandbox.svg';
import { ReactComponent as Headphones } from '../../assets/svg/SVG/headphones.svg';
import { ReactComponent as Heart } from '../../assets/svg/SVG/heart.svg';
import './sidebar.scss';

// import sandbox from '../../assets/svg/sprite.svg#icon-codesandbox';
// import headphones from '../../assets/svg/sprite.svg#icon-headphones';
// import heart from '../../assets/svg/sprite.svg#icon-heart';

export default () => {
  return (
    <BrowserRouter>
      <nav class="sidebar">
        <ul class="side-nav">
          <li class="side-nav__item">
            <a href="" class="side-nav__link">
              <div className="side-nav__icon">
                <Sandbox />
              </div>
              <span class="side-nav__text">About Me</span>
            </a>
          </li>
          <li class="side-nav__item">
            <a href="" class="side-nav__link">
              <div className="side-nav__icon">
                <Headphones />
              </div>
              <span class="side-nav__text">Portfolio</span>
            </a>
          </li>
          <li class="side-nav__item">
            <a href="" class="side-nav__link">
              <div className="side-nav__icon">
                <Heart />
              </div>
              <span class="side-nav__text">Contact</span>
            </a>
          </li>
        </ul>
        <legal class="legal">
          Created by <br />
          Kenichi Okiebisu
        </legal>
      </nav>
    </BrowserRouter>
  );
};
