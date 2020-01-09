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
  GET_JOKES_BY_USERNAME_FAIL } from '../actions';

const initialState = {
  username: '',
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
          isSignedUp: true,
          isLoggedIn: true,
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
          isLoggedIn: true,
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

    default:
      return state;
  }
}
