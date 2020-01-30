import React, { Component } from 'react';
import { Router } from '@reach/router';
import logo from './logo.svg';
import './App.css';
import Main from './views/Main';
import Details from './views/Details';
import Update from './views/Update';
import New from './views/New';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/pets"/>
        <New path="/pets/new"/>
        <Details path="/pets/:id"/>
        <Update path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;