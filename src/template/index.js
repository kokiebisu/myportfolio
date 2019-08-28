import React from 'react';
import Bar from '../components/Bar';
import Sidebar from '../components/Sidebar';

const App = props => {
  return (
    <div>
      <Bar />
      <div className="content">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
};

export default App;
