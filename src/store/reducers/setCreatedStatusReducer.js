import { SET_CREATED_STATUS } from '../actions/types';

const initialState = {
  type: SET_CREATED_STATUS,
  createdStatus: false,
};

const setCreatedStatusReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREATED_STATUS:
      return {
        ...state,
        createdStatus: action.payload,
      };
    default:
      return state;
  }
};

export default setCreatedStatusReducer;
