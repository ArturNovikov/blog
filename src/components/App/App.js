import { Route, Routes } from 'react-router-dom';

import { AuthProvider } from '../../services/AuthProvider';
import Layout from '../Layout';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';
import DesktopSignIn from '../../pages/DesktopSignIn';
import DesktopUpdateUser from '../../pages/DesktopUpdateUser';
import ArticleItem from '../../pages/ArticleItem';

import styles from './App.module.scss';

const App = () => {
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
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
