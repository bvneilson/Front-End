import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth.js';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';
export const GET_JOKES_START = 'GET_JOKES_START';
export const GET_JOKES_SUCCESS = 'GET_JOKES_SUCCESS';
export const GET_JOKES_FAIL = 'GET_JOKES_FAIL';
export const GET_JOKES_BY_USERNAME_START = 'GET_JOKES_BY_USERNAME_START';
export const GET_JOKES_BY_USERNAME_SUCCESS = 'GET_JOKES_BY_USERNAME_SUCCESS';
export const GET_JOKES_BY_USERNAME_FAIL = 'GET_JOKES_BY_USERNAME_FAIL';
export const CREATE_JOKE_START = 'CREATE_JOKE_START';
export const CREATE_JOKE_SUCCESS = 'CREATE_JOKE_SUCCESS';
export const CREATE_JOKE_FAIL = 'CREATE_JOKE_FAIL';
export const EDIT_JOKE_START = 'EDIT_JOKE_START';
export const EDIT_JOKE_SUCCESS = 'EDIT_JOKE_SUCCESS';
export const EDIT_JOKE_FAIL = 'EDIT_JOKE_FAIL';
export const DELETE_JOKE_START = 'DELETE_JOKE_START';
export const DELETE_JOKE_SUCCESS = 'DELETE_JOKE_SUCCESS';
export const DELETE_JOKE_FAIL = 'DELETE_JOKE_FAIL';

export const signUp = (credentials, history) => dispatch => {
  dispatch({ type: SIGN_UP_START });
  axios.post('https://pt-dad-jokes.herokuapp.com/api/auth/register', credentials).then(res => {
    //console.log(res);
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', res.data.created_user.username);
    history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: SIGN_UP_FAIL, payload: err })
  })
}

export const logIn = (credentials, history) => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios.post('https://pt-dad-jokes.herokuapp.com/api/auth/login', credentials).then(res => {
    //console.log(res);
    dispatch({ type: LOG_IN_SUCCESS, payload: res.data })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    localStorage.setItem('username', res.data.user.username);
    history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: LOG_IN_FAIL, payload: err })
  })
}

export const getJokes = () => dispatch => {
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
  dispatch({ type: GET_JOKES_START });
  axios.get('https://pt-dad-jokes.herokuapp.com/api/jokes').then(res => {
    //console.log(res);
    res.data = shuffle(res.data);
    dispatch({ type: GET_JOKES_SUCCESS, payload: res.data })
  }).catch(err => {
    console.error(err);
    dispatch({ type: GET_JOKES_FAIL, payload: err })
  })
}

export const getJokesByUsername = (username) => dispatch => {
  dispatch({ type: GET_JOKES_BY_USERNAME_START });
  axiosWithAuth().get(`https://pt-dad-jokes.herokuapp.com/api/jokes/${username}`).then(res => {
    //console.log(res);
    dispatch({ type: GET_JOKES_BY_USERNAME_SUCCESS, payload: res.data })
  }).catch(err => {
    console.error(err);
    dispatch({ type: GET_JOKES_BY_USERNAME_FAIL, payload: err })
  })
}

export const createJoke = (newJoke, history) => dispatch => {
  dispatch({ type: CREATE_JOKE_START });
  axiosWithAuth().post('https://pt-dad-jokes.herokuapp.com/api/jokes/create', newJoke).then(res => {
    //console.log(res);
    dispatch({ type: CREATE_JOKE_SUCCESS, payload: res.data })
    history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: CREATE_JOKE_FAIL, payload: err })
  })
}

export const editJoke = (id, editedJoke, history) => dispatch => {
  dispatch({ type: EDIT_JOKE_START });
  axiosWithAuth().put(`https://pt-dad-jokes.herokuapp.com/api/jokes/${id}`, editedJoke).then(res => {
    console.log(res);
    dispatch({ type: EDIT_JOKE_SUCCESS, payload: res.data })
    history.goBack();
  }).catch(err => {
    console.error(err);
    dispatch({ type: EDIT_JOKE_FAIL, payload: err })
  })
}

export const deleteJoke = (id, history, username) => dispatch => {
  dispatch({ type: DELETE_JOKE_START });
  axiosWithAuth().delete(`https://pt-dad-jokes.herokuapp.com/api/jokes/${id}`).then(res => {
    console.log(res);
    dispatch({ type: DELETE_JOKE_SUCCESS, payload: res.data })
    history.push(`/jokes/${username}`);
  }).catch(err => {
    console.error(err);
    dispatch({ type: DELETE_JOKE_FAIL, payload: err })
  })
}
