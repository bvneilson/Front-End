import { SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL,
  LOG_IN_START,
  LOG_IN_SUCCESS,
  LOG_IN_FAIL,
  GET_JOKES_START,
  GET_JOKES_SUCCESS,
  GET_JOKES_FAIL } from '../actions';

const initialState = {
  isLoggedIn: true,
  isSignedUp: false,
  jokes: [],
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
    default:
      return state;
  }
}
