import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../store/actionCreators/fetchArticleGlobally';
import { setIsAuthorised } from '../../store/actionCreators/setIsAuthorized';
import { setCreatedStatus } from '../../store/actionCreators/setCreatedStatus';
import skull from '../../assets/images/skull-crossbones-solid.svg';
import { HOME, NEW_ARTICLE, PROFILE, SIGN_IN, SIGN_UP } from '../../utils/routes';

import styles from './header.module.scss';

const Header = ({ isAuthorised }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state) => state.userName.userName);
  const userImage = useSelector((state) => state.userImage.userImage);
  const created = useSelector((state) => state.createdStatus.createdStatus);

  const handleRealworldBlogClick = () => {
    if (created) {
      dispatch(setCreatedStatus(false));
    }
  };

  const handleOnClickCreateArticle = () => {
    dispatch(setCurrentPage(1));
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setIsAuthorised(false));
    navigate(HOME);
  };

  return (
    <header className={styles.header}>
      <Link to={HOME} onClick={handleRealworldBlogClick}>
        <h1 className={styles.title}>Realworld Blog</h1>
      </Link>
      <div className={styles.authButtons}>
        {isAuthorised ? (
          <>
            <Link to={NEW_ARTICLE} onClick={handleOnClickCreateArticle}>
              <button className={styles.btnCreateArticle}>Create article</button>
            </Link>
            <div className={styles.userContainer}>
              <Link to={PROFILE} className={styles.userName}>
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
            <Link to={SIGN_IN} className={styles.btnSingIn}>
              Sign In
            </Link>
            <Link to={SIGN_UP} className={styles.btnSingUp}>
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
