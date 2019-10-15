import React from 'react';
import './skills.scss';
import { Meter } from 'grommet';

import react from '../../assets/img/react.png';
import sass from '../../assets/img/sass.png';
import node from '../../assets/img/nodejs.jpg';
import django from '../../assets/img/django.png';
import mongo from '../../assets/img/mongo.png';
import java from '../../assets/img/java.jpg';

export default () => (
  <div className="skills">
    <h2>Skills</h2>
    <div className="skills__container">
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 80,
              label: 'sixty',
              onClick: () => {}
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={react} alt="" />
        </div>
      </div>
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 85,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-2'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={sass} alt="" />
        </div>
      </div>
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 65,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-3'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={node} alt="" />
        </div>
      </div>
      <div className="skills__skill skills__skill--2">
        <Meter
          values={[
            {
              value: 70,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-4'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={django} alt="" />
        </div>
      </div>
      <div className="skills__skill skills__skill--2">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {},
              color: 'brand'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={java} alt="" />
        </div>
      </div>
      <div className="skills__skill skills__skill--2">
        <Meter
          values={[
            {
              value: 55,
              label: 'sixty',
              onClick: () => {},
              color: 'neutral-3'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="130"
          thickness="small"
        />
        <div>
          <img src={mongo} alt="" />
        </div>
      </div>
    </div>
  </div>
);
