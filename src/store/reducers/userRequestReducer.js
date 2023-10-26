import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userRequestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userRequestReducer;
