import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { signUp } from '../actions';

const Signup = props => {
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

  const handleSignup = e => {
    e.preventDefault();
    props.signUp(credentials);
  }

  return (
    <div className="text-center">
      <h3>Please use the form to sign up!</h3>
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
        <Button onClick={handleSignup}>Sign up</Button>
        <FormText>Already have an account? Please, <Link to="/login"><u>log in here</u></Link>.</FormText>
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
    isLoggedIn: state.isLoggedIn
  }
}

export default connect(mapStateToProps, { signUp })(Signup);
