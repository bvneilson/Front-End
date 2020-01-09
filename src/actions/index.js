import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAuth.js';

export const SIGN_UP_START = 'SIGN_UP_START';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL';
export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAIL = 'LOG_IN_FAIL';

export const signUp = (credentials) => dispatch => {
  dispatch({ type: SIGN_UP_START });
  axios.post('http://dadjokes9.herokuapp.com/auth/register', credentials).then(res => {
    console.log(res);
    dispatch({ type: SIGN_UP_SUCCESS, payload: res.data.message })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    this.props.history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: SIGN_UP_FAIL, payload: err })
  })
}

export const logIn = (credentials) => dispatch => {
  dispatch({ type: LOG_IN_START });
  axiosWithAuth().post('http://dadjokes9.herokuapp.com/auth/login', credentials).then(res => {
    console.log(res);
    dispatch({ type: LOG_IN_SUCCESS, payload: res.data.message })
    //set token to localstorage
    localStorage.setItem('token', res.data.token);
    this.props.history.push('/');
  }).catch(err => {
    console.error(err);
    dispatch({ type: LOG_IN_FAIL, payload: err })
  })
}
