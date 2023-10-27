import { SET_USER_IMAGE } from '../actions/types';

export const setUserImage = (image) => ({
  type: SET_USER_IMAGE,
  payload: image,
});

export default setUserImage;
