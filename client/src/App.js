import React from 'react';
import { Route } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import World from './components/World';

import './App.css';

function App() {
  return (
    <>
      <Route exact path="/" component={ Home } />
      <Route path='/register' component={ Register } />
      <Route path='/world' component={ World } />
    </>
  );
}

export default App;
