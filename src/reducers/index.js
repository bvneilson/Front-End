import { SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  GET_JOKES_START,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAIL,
  GET_JOKES_BY_USERNAME_START,
  GET_JOKES_BY_USERNAME_SUCCESS,
  GET_JOKES_BY_USERNAME_FAIL,
  CREATE_JOKE_START,
  CREATE_JOKE_SUCCESS,
  CREATE_JOKE_FAIL } from '../actions';

const initialState = {
  username: localStorage.getItem('username'),
  jokes: [],
  jokesByUsername: [],
  isFetching: false
}

export const reducer = (state = initialState, action) => {
  //console.log('reducer', action)
  switch (action.type) {
    case SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          username: action.payload.created_user.username,
          isFetching: false,
          error: ''
        }
    case SIGN_UP_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case LOG_IN_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
      case LOG_IN_SUCCESS:
        return {
          ...state,
          username: action.payload.user.username,
          isFetching: false,
          error: ''
        }
    case LOG_IN_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case GET_JOKES_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
      case GET_JOKES_SUCCESS:
        return {
          ...state,
          jokes: action.payload,
          isFetching: false,
          error: ''
        }
    case GET_JOKES_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case GET_JOKES_BY_USERNAME_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case GET_JOKES_BY_USERNAME_SUCCESS:
      return {
        ...state,
        jokesByUsername: action.payload,
        isFetching: false,
        error: ''
      }
    case GET_JOKES_BY_USERNAME_FAIL:
      return {
        ...state,
        error: action.payload
      }
    case CREATE_JOKE_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case CREATE_JOKE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: ''
      }
    case CREATE_JOKE_FAIL:
      return {
        ...state,
        error: action.payload
      }

    default:
      return state;
  }
}
