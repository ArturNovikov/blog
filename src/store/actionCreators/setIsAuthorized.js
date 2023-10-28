import { SET_IS_AUTHORISED } from '../actions/types';

export const setIsAuthorised = (isAuth) => ({
  type: SET_IS_AUTHORISED,
  payload: isAuth,
});

export default setIsAuthorised;
