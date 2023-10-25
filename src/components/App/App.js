import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from '../Header/index';
import ArticlesList from '../ArticlesList';
import DesktopSignUp from '../../pages/DesktopSignUp';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Switch>
          <Route exact path="/sign-up" component={DesktopSignUp} />
          <Route path="/">
            <>
              <Header />
              <main>
                <ArticlesList className={styles.articlesList} />
              </main>
            </>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;