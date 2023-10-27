import { SET_USER_NAME } from '../actions/types';

export const setUserName = (name) => ({
  type: SET_USER_NAME,
  payload: name,
});

export default setUserName;
