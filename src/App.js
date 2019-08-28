import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Bar from './components/Bar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';

const App = () => {
  return (
    <div className="App">
      <Welcome />
      <div className="container">
        <Bar />
        <div className="content">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default App;
