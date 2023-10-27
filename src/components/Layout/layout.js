import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../Header';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  return (
    <>
      <Header isAuthorised={isAuthorised} />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
