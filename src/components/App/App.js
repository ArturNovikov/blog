import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from '../Layout';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';
import DesktopSignIn from '../../pages/DesktopSignIn';
import DesktopAuthorised from '../../pages/DesktopAuthorised';
import ArticleItem from '../../pages/ArticleItem';

import styles from './App.module.scss';

const App = () => {
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
