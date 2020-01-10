import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import MyJokes from './components/MyJokes.js';
import PrivateRoute from './privateRoute.js';
import Home from './components/Home.js';
import NewJoke from './components/NewJoke.js';
import EditJoke from './components/EditJoke.js';

function App() {

  return (
    <div className="App">
      <Header />
      <Route exact path="/" render={props => {return <Home {...props} />}} />
      <Route path="/login" render={props => {return <Login {...props} />}} />
      <Route path="/signup" render={props => {return <Signup {...props} />}} />
      <PrivateRoute path="/jokes/:username" component={MyJokes} />
      <PrivateRoute path="/new-joke" component={NewJoke} />
      <PrivateRoute path="/edit-joke/:id" component={EditJoke} />
    </div>
  );
}

export default App;
