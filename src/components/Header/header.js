import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setUnAuthorised } from '../../store/actionCreators/setIsAuthorized';
import skull from '../../assets/images/skull-crossbones-solid.svg';

import styles from './header.module.scss';

const Header = ({ isAuthorised }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.userName.userName);
  const userImage = useSelector((state) => state.userImage.userImage);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setUnAuthorised(false));
    navigate('/');
  };

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
                {name}
              </Link>
              <img className={styles.userImg} src={userImage || skull} alt="user" />
            </div>
            <button className={styles.btnLogOut} onClick={handleLogout}>
              Log Out
            </button>
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
