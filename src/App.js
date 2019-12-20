import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';
import Container from '@material-ui/core/Container';


import Header from './components/Header.js';

function App() {
  return (
    <Container className="App">
      <Header />
    </Container>
  );
}

export default App;
