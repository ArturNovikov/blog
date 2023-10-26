import React from 'react';

import Header from '../Header';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Layout;
