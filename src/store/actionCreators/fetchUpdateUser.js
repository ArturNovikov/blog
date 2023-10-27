import ApiService from '../../services/apiService';
import { FETCH_UPDATE_REQUEST, FETCH_UPDATE_SUCCESS, FETCH_UPDATE_ERROR } from '../actions/types';

export const fetchUpdateRequest = () => ({
  type: FETCH_UPDATE_REQUEST,
});

export const fetchUpdateSuccess = (data) => ({
  type: FETCH_UPDATE_SUCCESS,
  payload: data,
});

export const fetchUpdateError = (error) => ({
  type: FETCH_UPDATE_ERROR,
  payload: error,
});

const apiService = new ApiService();

export const updateUser = (updateData) => async (dispatch) => {
  dispatch(fetchUpdateRequest());
  try {
    const response = await apiService.updateUser(updateData);
    dispatch(fetchUpdateSuccess(response.user));
    return response;
  } catch (error) {
    dispatch(fetchUpdateError(error.message));
    throw error;
  }
};
