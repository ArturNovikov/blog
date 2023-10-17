import React from 'react';
import { Pagination, ConfigProvider } from 'antd';

import Header from '../Header/index';
import Article from '../Article';

import styles from './App.module.scss';

const configSettings = {
  theme: {
    token: {
      colorPrimary: 'white',
    },
    components: {
      Pagination: {
        itemActiveBg: '#1890FF',
      },
    },
  },
};

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
          <Article title="Some article title" tags={['Tag1']} author="John Doe" date="March 3, 2020" />
          <ConfigProvider {...configSettings}>
            <Pagination
              className={styles.pagination}
              defaultCurrent={1}
              current={1}
              onChange={() => {}}
              pageSize={5}
              total={50}
              hideOnSinglePage={true}
              showSizeChanger={false}
            />
          </ConfigProvider>
        </section>
      </main>
    </div>
  );
};

export default App;
