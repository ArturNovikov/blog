import { Route, Routes, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { SIGN_IN, SIGN_UP, PROFILE, ARTICLE, HOME, NEW_ARTICLE, EDIT_ARTICLE } from '../../utils/routes';
import { AuthProvider } from '../../services/AuthProvider';
import Layout from '../Layout';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';
import DesktopSignIn from '../../pages/DesktopSignIn';
import DesktopUpdateUser from '../../pages/DesktopUpdateUser';
import ArticleItem from '../../pages/ArticleItem';
import NewArticleCreate from '../../pages/NewArticleCreate';
import PrivateRoute from '../../services/PrivateRoute';

import styles from './App.module.scss';

const App = () => {
  const [key, setKey] = useState(Date.now());
  const location = useLocation();

  useEffect(() => {
    if (key && location.pathname === HOME) {
      setKey(Date.now());
    }
  }, [location]);

  const isAuthorised = useSelector((state) => state.isAuthorised.isAuthorised);
  return (
    <div className={styles.container}>
      <AuthProvider>
        <Routes>
          <Route path={SIGN_IN} element={<DesktopSignIn />} />
          <Route path={SIGN_UP} element={<DesktopSignUp />} />
          <Route
            path={PROFILE}
            element={
              <PrivateRoute>
                <DesktopUpdateUser />
              </PrivateRoute>
            }
          />
          <Route
            path={ARTICLE}
            element={
              <Layout>
                <ArticleItem />
              </Layout>
            }
          />
          <Route
            path={HOME}
            element={
              <Layout>
                <ArticlesList />
              </Layout>
            }
          />
          <Route
            path={NEW_ARTICLE}
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
            path={EDIT_ARTICLE}
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
