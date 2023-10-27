import { SET_IS_AUTHORISED, SET_UN_AUTHORISED } from '../actions/types';

const initialState = {
  isAuthorised: false,
};

const isAuthorisedReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_AUTHORISED: {
      return {
        ...state,
        isAuthorised: action.payload,
      };
    }
    case SET_UN_AUTHORISED: {
      return {
        ...state,
        isAuthorised: action.payload,
      };
    }
    default:
      return state;
  }
};

export default isAuthorisedReducer;
