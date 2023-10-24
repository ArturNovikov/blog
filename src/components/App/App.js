import React from 'react';

import Header from '../Header/index';
import ArticlesList from '../ArticlesList';

import styles from './App.module.scss';

const App = () => {
  console.log('App!');
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ArticlesList className={styles.articlesList} />
      </main>
    </div>
  );
};

export default App;
