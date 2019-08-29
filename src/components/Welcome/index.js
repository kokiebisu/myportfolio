import React from 'react';
import './welcome.scss';
import { Clock } from 'grommet';

export default () => {
  const today = new Date();
  let time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  time = parseInt(time, 10);
  return (
    <div className="welcome">
      <h1>{getMessage(time)}</h1>
      <Clock type="digital" />
    </div>
  );
};

const getMessage = time => {
  if (time > 90000 && time <= 120000) {
    return <h1>Good Morning...</h1>;
  } else if (time > 120000 && time <= 160000) {
    return <h1>Good Afternoon...</h1>;
  } else if (time > 160000 && time <= 200000) {
    return <h1>Good Evening...</h1>;
  } else if (time > 200000 && time < 240000) {
    return <h1>Good Night...</h1>;
  } else {
    return <h1>Go To Sleep!</h1>;
  }
};
