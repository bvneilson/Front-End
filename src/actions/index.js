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

export const signUp = (credentials, history) => dispatch => {
  dispatch({ type: SIGN_UP_START });
  axios.post('https://pt-dad-jokes.herokuapp.com/api/auth/register', credentials).then(res => {
    console.log(res);
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.message })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: SIGN_UP_FAIL, payload: err })
  })
}

export const logIn = (credentials, history) => dispatch => {
  dispatch({ type: LOG_IN_START });
  axios.post('https://pt-dad-jokes.herokuapp.com/api/auth/login', credentials).then(res => {
    console.log(res);
    dispatch({ type: LOG_IN_SUCCESS, payload: res.data.message })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: LOG_IN_FAIL, payload: err })
  })
}

export const getJokes = () => dispatch => {
  dispatch({ type: GET_JOKES_START });
  axios.get('https://pt-dad-jokes.herokuapp.com/api/jokes').then(res => {
    console.log(res);
    dispatch({ type: GET_JOKES_SUCCESS, payload: res.data })
  }).catch(err => {
    console.error(err);
    dispatch({ type: GET_JOKES_FAIL, payload: err })
  })
}

export const getJokesByUsername = (username) => dispatch => {
  dispatch({ type: GET_JOKES_BY_USERNAME_START });
  axiosWithAuth().get(`https://pt-dad-jokes.herokuapp.com/api/jokes/${username}`).then(res => {
    console.log(res);
    dispatch({ type: GET_JOKES_BY_USERNAME_SUCCESS, payload: res.data })
  }).catch(err => {
    console.error(err);
    dispatch({ type: GET_JOKES_BY_USERNAME_FAIL, payload: err })
  })
}
