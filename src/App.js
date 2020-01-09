import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
    <div className="App">
      <Header />
      <Route path="/login" render={props => {return <Login {...props} />}} />
      <Route path="/signup" render={props => {return <Signup {...props} />}} />
    </div>
  );
}

export default App;
