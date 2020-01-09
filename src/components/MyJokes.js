import React, { useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { getJokesByUsername } from '../actions';
import JokeCard from './JokeCard.js';

const MyJokes = props => {

  useEffect(() => {
    const { username } = props.match.params;

    props.getJokesByUsername(username);
  },[props.match.params]);

  if (!props.jokesByUsername) {
    return <h2>Loading jokes...</h2>
  }

  return (
    props.jokesByUsername.map(joke => {
      //console.log(joke);
      return (
        <Container>
          <Row>
            {props.jokesByUsername.map((joke, index) => {
              return <JokeCard joke={joke} key={index} />
            })}
          </Row>
        </Container>
      )
    })
  )
}

const mapStateToProps = state => {
  if (!state) {
    return {};
  }

  return {
    jokesByUsername: state.jokesByUsername
  }
}

export default connect(mapStateToProps, { getJokesByUsername })(MyJokes);
