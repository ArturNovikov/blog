import ApiService from '../../services/apiService';
import { FETCH_REGISTER_REQUEST, FETCH_REGISTER_SUCCESS, FETCH_REGISTER_ERROR } from '../actions/types';

export const fetchRegisterRequest = () => ({
  type: FETCH_REGISTER_REQUEST,
});

export const fetchRegisterSuccess = (data) => ({
  type: FETCH_REGISTER_SUCCESS,
  payload: data,
});

export const fetchRegisterError = (error) => ({
  type: FETCH_REGISTER_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const registerUser = (userData) => async (dispatch) => {
  dispatch(fetchRegisterRequest());
  try {
    const response = await apiService.registerUser(userData);
    dispatch(fetchRegisterSuccess(response.user));
    return response;
  } catch (error) {
    dispatch(fetchRegisterError(error.message));
    throw error;
  }
};
