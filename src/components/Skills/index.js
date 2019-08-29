import React from 'react';
import './skills.scss';
import { Meter } from 'grommet';

import javascript from '../../assets/img/javascript_logo.png';

export default () => (
  <div className="skills">
    <h2>Skills</h2>
    <div className="skills__container">
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {}
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
      </div>
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-2'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
      </div>
      <div className="skills__skill skills__skill--1">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-3'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
      </div>
      <div className="skills__skill skills__skill--2">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {},
              color: 'accent-4'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
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
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
      </div>
      <div className="skills__skill skills__skill--2">
        <Meter
          values={[
            {
              value: 60,
              label: 'sixty',
              onClick: () => {},
              color: 'neutral-3'
            }
          ]}
          aria-label="meter"
          type="circle"
          round="true"
          size="160"
          thickness="small"
        />
        <img src={javascript} alt="" />
      </div>
    </div>
  </div>
);
