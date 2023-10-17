import React from 'react';
import { Pagination } from 'antd';

import Header from '../Header/index';
import Article from '../Article';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <section className={styles.articleList}>
          <Article title="Some article title" tags={['Tag1']} author="John Doe" date="March 3, 2020" />
          <Article title="Some article title" tags={['Tag1', 'SomeTag']} author="John Doe" date="March 3, 2020" />
          <Article title="Some article title" tags={['Tag1']} author="John Doe" date="March 3, 2020" />
          <Article title="Some article title" tags={['Tag1']} author="John Doe" date="March 3, 2020" />
          <Pagination defaultCurrent={1} total={50} />
        </section>
      </main>
    </div>
  );
};

export default App;
