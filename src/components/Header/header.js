import React from 'react';
import { Link } from 'react-router-dom';

import skull from '../../assets/images/skull-crossbones-solid.svg';

import styles from './header.module.scss';

const Header = ({ isAuthorised }) => {
  console.log(isAuthorised);
  return (
    <header className={styles.header}>
      <Link to="/">
        <h1 className={styles.title}>Realworld Blog</h1>
      </Link>
      <div className={styles.authButtons}>
        {isAuthorised ? (
          <>
            <button className={styles.btnCreateArticle}>Create article</button>
            <div className={styles.userContainer}>
              <Link to="/profile" className={styles.userName}>
                John Doe
              </Link>
              <img className={styles.userImg} src={skull} alt="user" />
            </div>
            <button className={styles.btnLogOut}>Log Out</button>
          </>
        ) : (
          <>
            <Link to="/sign-in" className={styles.btnSingIn}>
              Sign In
            </Link>
            <Link to="/sign-up" className={styles.btnSingUp}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
