import React, { useState, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { editJoke, getJokes } from '../actions';

const EditJoke = props => {
  useEffect(() => {
    props.getJokes();
  }, [])

  const original = props.jokes.find(joke => joke.id === parseInt(props.match.params.id))

  const [editedJoke, setEditedJoke] = useState({
    joke: '',
    punchline: '',
    author_username: ''
  });

  if (!props.jokes || props.jokes === []) {
    return <h3>Loading...</h3>
  }

  const handleChange = e => {
    if (editedJoke.joke === '' || editedJoke.punchline === '' || editedJoke.author_username === '') {
      setEditedJoke({
        ...original,
        [e.target.name]: e.target.value
      })
    } else {
      setEditedJoke({
        ...editedJoke,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleEditJoke = e => {
    e.preventDefault();
    if(editedJoke.joke !== '') {
      props.editJoke(parseInt(props.match.params.id), editedJoke, props.history);
    }
  }

  return (
    <div className="text-center">
      <h3>Fill out the form to edit a joke!</h3>
      <Form className="action-form">
        <Row form>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="joke">Joke</Label>
              <Input type="text" name="joke" value={(original && editedJoke.joke === '') ? original.joke : editedJoke.joke} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={{size: 8, offset: 2}}>
            <FormGroup>
              <Label for="punchline">Punchline (optional)</Label>
              <Input type="text" name="punchline" value={(original && editedJoke.punchline === '') ? original.punchline : editedJoke.punchline} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        <Button onClick={handleEditJoke}>Submit Joke</Button>
      </Form>
    </div>
  )
}

const mapStateToProps = state => {
  if (!state) {
    return {};
  }

  return {
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { editJoke, getJokes })(EditJoke);
