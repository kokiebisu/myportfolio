import React from 'react';
import './welcome.scss';
import { Clock } from 'grommet';
import styled from 'styled-components';

export default () => {
  const today = new Date();
  let time = `${today.getHours()}${today.getMinutes()}${today.getSeconds()}`;
  time = parseInt(time, 10);
  return (
    <div className="welcome">
      {getMessage(time)}
      <CustomClock type="digital" />
    </div>
  );
};

const CustomClock = styled(Clock)`
  @media (max-width: 600px) {
    margin: 2rem auto;
    text-align: center;
  }
`;

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
