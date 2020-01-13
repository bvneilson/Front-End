import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';
import JokeCard from './JokeCard.js';
import { Container, Row, Button } from 'reactstrap';

const Home = props => {
  //console.log(props.jokes);
  const [numJokes, setNumJokes] = useState(10);
  const [load, setLoad] = useState('Load More Jokes');
  useEffect(() => {
    props.getJokes();
  }, [])

  if (!props.jokes || props.jokes === []) {
    return <h3>Loading jokes...</h3>
  }

  const loadMore = () => {
    if (numJokes <= props.jokes.length) {
      setNumJokes(numJokes + 5)
    } else {
      setLoad("That's all the jokes!");
    }
  }

  return (
    <Container>
      <Row>
        {props.jokes.slice(0, numJokes).map((joke, index) => {
          return <JokeCard joke={joke} key={index} />
        })}
      </Row>
      <Row>
        <Button color="secondary" className="load-more-button" onClick={loadMore}>{load}</Button>
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
