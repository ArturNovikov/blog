import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
