import { FETCH_UPDATE_REQUEST, FETCH_UPDATE_SUCCESS, FETCH_UPDATE_ERROR } from '../actions/types';

const initialState = {
  loading: false,
  data: [],
  error: null,
};

const userUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
      };
    case FETCH_UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userUpdateReducer;
