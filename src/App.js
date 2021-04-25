import React, { Component } from 'react';
import './App.css';
import Form from './components/Form'
import Landingpage from './components/Landingpage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
    <div className="App">
        <Route path="/landingpage" component={Landingpage} />
        <Route path="/form" component={Form} /> 
    </div>
    </Router>
  );
}

export default App;
