import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { AuthProvider } from '../../services/AuthProvider';
import Layout from '../Layout';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';
import DesktopSignIn from '../../pages/DesktopSignIn';
import DesktopUpdateUser from '../../pages/DesktopUpdateUser';
import ArticleItem from '../../pages/ArticleItem';
import NewArticleCreate from '../../pages/NewArticleCreate';

import styles from './App.module.scss';

const App = () => {
  const [key, setKey] = useState(Date.now());
  const location = useLocation();

  useEffect(() => {
    if (key && location.pathname === '/') {
      setKey(Date.now());
    }
  }, [location]);

  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  return (
    <div className={styles.container}>
      <AuthProvider>
        <Routes>
          <Route path="/sign-in" element={<DesktopSignIn />} />
          <Route path="/sign-up" element={<DesktopSignUp />} />
          <Route path="/profile" element={<DesktopUpdateUser />} />
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
          <Route
            path="/new-article"
            element={
              isAuthorised ? (
                <Layout>
                  <NewArticleCreate />
                </Layout>
              ) : (
                <DesktopSignIn />
              )
            }
          />
          <Route
            path="/articles/:slug/edit"
            element={
              <Layout>
                <NewArticleCreate />
              </Layout>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
