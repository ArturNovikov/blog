import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';

import Authorised from './authorised';

const DesktopAuthorised = () => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  console.log(isAuthorised);
  return (
    <>
      <Header isAuthorised={isAuthorised} />
      <Authorised />
    </>
  );
};

export default DesktopAuthorised;
