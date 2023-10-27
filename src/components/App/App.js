import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Layout from '../Layout';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';
import DesktopSignIn from '../../pages/DesktopSignIn';
import DesktopAuthorised from '../../pages/DesktopAuthorised';
import ArticleItem from '../../pages/ArticleItem';
import { setIsAuthorised } from '../../store/actionCreators/setIsAuthorized';

import styles from './App.module.scss';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setIsAuthorised(true));
    }
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/sign-in" element={<DesktopSignIn />} />
        <Route path="/sign-up" element={<DesktopSignUp />} />
        <Route path="/profile" element={<DesktopAuthorised />} />
        <Route
          path="/articles/:slug"
          element={
            <Layout>
              <ArticleItem />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <ArticlesList />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
