import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';

import SignIn from './signIn';

const DesktopSignIn = () => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  return (
    <>
      <Header isAuthorised={isAuthorised} />
      <SignIn />
    </>
  );
};

export default DesktopSignIn;
