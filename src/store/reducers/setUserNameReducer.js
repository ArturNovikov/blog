import { SET_USER_NAME } from '../actions/types';

const initialState = {
  userName: 'Your name could be here!',
};

const setUserNameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default setUserNameReducer;
