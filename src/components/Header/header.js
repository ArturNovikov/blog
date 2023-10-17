import React from 'react';

import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Realworld Blog</h1>
      <div className={styles.authButtons}>
        <button className={styles.btnSingIn}>Sign In</button>
        <button className={styles.btnSingUp}>Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
