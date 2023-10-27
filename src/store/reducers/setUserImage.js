import { SET_USER_IMAGE } from '../actions/types';
import skull from '../../assets/images/skull-crossbones-solid.svg';

const initialState = {
  userImage: skull,
};

const setUserImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_IMAGE:
      return {
        ...state,
        userImage: action.payload,
      };
    default:
      return state;
  }
};

export default setUserImageReducer;
