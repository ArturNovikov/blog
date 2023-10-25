import React from 'react';

import Header from '../../components/Header';

import Authorised from './authorised';

const DesktopAuthorised = () => {
  return (
    <>
      <Header isAuthorised={true} />
      <Authorised />
    </>
  );
};

export default DesktopAuthorised;
