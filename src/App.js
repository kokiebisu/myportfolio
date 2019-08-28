import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/front';
import About from './pages/about';
import Contact from './pages/contact';
import Projects from './pages/projects';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Welcome />
      <div className="container">
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/projects" component={Projects} />
      </div>
    </Router>
  );
};

export default App;
