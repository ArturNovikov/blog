import { SET_IS_AUTHORISED, SET_UN_AUTHORISED } from '../actions/types';

export const setIsAuthorised = (isAuth) => ({
  type: SET_IS_AUTHORISED,
  payload: isAuth,
});

export const setUnAuthorised = (isAuth) => ({
  type: SET_UN_AUTHORISED,
  payload: isAuth,
});
