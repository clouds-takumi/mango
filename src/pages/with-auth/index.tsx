import React, { FC } from 'react';
import styles from './index.less';
import { Menu } from 'antd';
import Link from 'umi/link';
import menuData from './menu';

const Home: FC = props => {
  const renderSidebar = () => {
    return (
      <Menu >
        {menuData.map(m => (
          <Menu.Item key={m.key}>
            <Link to={m.key} className={styles.menu}>
              {m.icon}{m.name}
            </Link>
          </Menu.Item>
        ))}
      </Menu>
    );
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>{renderSidebar()}</div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
export default Home;
