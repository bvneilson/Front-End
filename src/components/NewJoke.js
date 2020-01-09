import React, { useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { createJoke } from '../actions';

const NewJoke = props => {
  const [newJoke, setNewJoke] = useState({
    joke: '',
    punchline: '',
    author_username: props.username
  });

  const handleChange = e => {
    setNewJoke({
      ...newJoke,
      [e.target.name]: e.target.value
    })
  }

  const handleCreateJoke = e => {
    e.preventDefault();
    if(newJoke.joke !== '') {
      props.createJoke(newJoke, props.history);
    }
  }

  return (
    <div className="text-center">
      <h3>Fill out the form to submit a joke!</h3>
      <Form className="action-form">
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="joke">Joke</Label>
              <Input type="text" name="joke" value={newJoke.joke} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="punchline">Punchline (optional)</Label>
              <Input type="text" name="punchline" value={newJoke.punchline} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleCreateJoke}>Submit Joke</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  if (!state) {
    return {};
  }

  return {
    username: state.username
  }
}

export default connect(mapStateToProps, { createJoke })(NewJoke);
