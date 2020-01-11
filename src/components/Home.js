import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';
import JokeCard from './JokeCard.js';
import { Container, Row } from 'reactstrap';

const Home = props => {
  //console.log(props.jokes);
  useEffect(() => {
    props.getJokes();
  }, [])

  if (!props.jokes || props.jokes === []) {
    return <h3>Loading jokes...</h3>
  }

  const shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  const shuffledJokes = shuffle(props.jokes);

  return (
    <Container>
      <Row>
        {shuffledJokes.map((joke, index) => {
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
