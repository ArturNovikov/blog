import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';

import Update from './update';

const desktopUpdateUser = () => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  return (
    <>
      <Header isAuthorised={isAuthorised} />
      <Update />
    </>
  );
};

export default desktopUpdateUser;
