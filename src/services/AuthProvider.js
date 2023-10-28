import React, { createContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setIsAuthorised } from '../store/actionCreators/setIsAuthorized';
import { setUserName } from '../store/actionCreators/setUserName';
import { setUserImage } from '../store/actionCreators/setUserImage';

import ApiService from './apiService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const apiService = new ApiService();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setIsAuthorised(true));
      apiService
        .fetchCurrentUser()
        .then((data) => {
          if (data && data.user) {
            dispatch(setUserImage(data.user.image));
            dispatch(setUserName(data.user.username));
          } else {
            dispatch(setIsAuthorised(false));
          }
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error during user data fetching: ', error);
          dispatch(setIsAuthorised(false));
          dispatch(setIsLoading(false));
        });
    } else {
      dispatch(setIsAuthorised(false));
      setIsLoading(false);
    }
  }, [dispatch]);

  return <AuthContext.Provider value={{ isLoading }}>{children}</AuthContext.Provider>;
};
