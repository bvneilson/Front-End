import React from 'react';
import { Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Container from '@material-ui/core/Container';


import Header from './components/Header.js';
import Login from './components/Login.js';

function App() {
  return (
    <Container className="App">
      <Header />
      <Route path="/login" component={Login} />
    </Container>
  );
}

export default App;
