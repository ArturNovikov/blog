import ApiService from '../../services/apiService';
import { FETCH_LOGIN_REQUEST, FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from '../actions/types';

export const fetchLoginRequest = () => ({
  type: FETCH_LOGIN_REQUEST,
});

export const fetchLoginSuccess = (data) => ({
  type: FETCH_LOGIN_SUCCESS,
  payload: data,
});

export const fetchLoginError = (error) => ({
  type: FETCH_LOGIN_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const loginUser = (loginData) => async (dispatch) => {
  dispatch(fetchLoginRequest());
  try {
    const response = await apiService.loginUser(loginData);
    dispatch(fetchLoginSuccess(response));
    return response;
  } catch (error) {
    dispatch(fetchLoginError(error.message));
    throw error;
  }
};
