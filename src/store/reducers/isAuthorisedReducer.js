import { SET_IS_AUTHORISED } from '../actions/types';

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
    default:
      return state;
  }
};

export default isAuthorisedReducer;
