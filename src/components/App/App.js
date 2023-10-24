import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../Header/index';
import ArticlesList from '../ArticlesList';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <main>
          <ArticlesList className={styles.articlesList} />
        </main>
      </Router>
    </div>
  );
};

export default App;
