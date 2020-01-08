import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { logIn } from '../actions';

const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleLogin = e => {
    e.preventDefault();
    props.logIn(credentials);
  }

  return (
    <div className="text-center">
      <h3>Please use the form to log in!</h3>
      <Form className="action-form">
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" value={credentials.username} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" value={credentials.password} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleLogin}>Log in</Button>
        <FormText>Don't have an account? Please, <Link to="/signup"><u>sign up here</u></Link>.</FormText>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  //console.log(state);
  if (!state) {
    return{};
  }
  return {
    isSignedUp: state.isSignedUp
  }
}

export default connect(mapStateToProps, { logIn })(Login);
