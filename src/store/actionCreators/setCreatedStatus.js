import { SET_CREATED_STATUS } from '../actions/types';

export const setCreatedStatus = (createdStatus) => ({
  type: SET_CREATED_STATUS,
  payload: createdStatus,
});
