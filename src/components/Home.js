import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';
import JokeCard from './JokeCard.js';
import { Container, Row } from 'reactstrap';

const Home = props => {
  console.log(props.jokes);
  useEffect(() => {
    props.getJokes();
  }, [])

  if (!props.jokes) {
    return <h3>Loading jokes...</h3>
  }

  return (
    <Container>
      <Row>
        {props.jokes.map((joke, index) => {
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
    jokes: state.jokes
  }
}

export default connect(mapStateToProps, { getJokes })(Home);
