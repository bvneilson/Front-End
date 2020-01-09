import React, { useState, useEffect } from 'react';
import { Container, Row } from 'reactstrap';
import { connect } from 'react-redux';
import { getJokesByUsername } from '../actions';
import JokeCard from './JokeCard.js';

const MyJokes = props => {
  const [username, setUsername] = useState();
  const match = (username === props.username) ? true : false;

  useEffect(() => {
    const { username } = props.match.params;
    setUsername(username);

    props.getJokesByUsername(username);
  },[]);

  if (!props.jokesByUsername) {
    return <h2>Loading jokes...</h2>
  }

  if (props.jokesByUsername.length === 0) {
    return (
      <Container>
        <h2>{(match) ? 'Your Jokes' : `Jokes by ${username}`}</h2>
        <Row>
          <p>{(match) ? 'You haven\'t submitted any jokes yet.' : `${username} hasn't submitted any jokes yet.`}{`${username} hasn't submitted any jokes yet.`}</p>
        </Row>
      </Container>
    )
  }

  return (
    <Container>
      <h2>{(match) ? 'Your Jokes' : `Jokes by ${username}`}</h2>
      <Row>
        {props.jokesByUsername.map((joke, index) => {
          return <JokeCard joke={joke} key={index} />
        })}
      </Row>
    </Container>
  )
}

const mapStateToProps = state => {
  if (!state) {
    return {};
  }

  return {
    jokesByUsername: state.jokesByUsername,
    username: state.username
  }
}

export default connect(mapStateToProps, { getJokesByUsername })(MyJokes);
