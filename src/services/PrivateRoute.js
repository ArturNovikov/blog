import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { SIGN_IN } from '../utils/routes';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);

  if (!isAuthorised) {
    return <Navigate to={SIGN_IN} state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
