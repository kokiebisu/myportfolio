import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Welcome />
      <div className="container">
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
      </div>
    </Router>
  );
};

export default App;
