import React, { Fragment } from 'react';
import Sidebar from '../components/Sidebar';
import Bar from '../components/Bar';
import './template.scss';

export default props => (
  <Fragment>
    <Bar />
    <div className="content">
      <Sidebar />
      {props.children}
    </div>
  </Fragment>
);
