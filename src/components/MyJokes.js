import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../actions';

const MyJokes = props => {
  console.log('props.jokes = ' + props.jokes);
  useEffect(() => {
    props.getJokes();
  }, [])

  if (!props.jokes || props.jokes === []) {
    return <h2>Loading jokes...</h2>
  }

  return (
    props.jokes.map(joke => {
      console.log(joke);
      return (
        <h3>Joke</h3>
      )
    })
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

export default connect(mapStateToProps, { getJokes })(MyJokes);
