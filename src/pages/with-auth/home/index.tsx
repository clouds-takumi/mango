import React from 'react';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
const Home: React.FC = props => {
  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          <code>umi-ts</code>
        </li>
        <li>{formatMessage({ id: 'index.start' })}</li>
      </ul>
    </div>
  );
};
export default Home;
