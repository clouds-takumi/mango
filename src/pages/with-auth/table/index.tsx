import React from 'react';
import styles from './index.less';
import cn from 'classnames';
const Table: React.FC = props => {
    return (
        <div className={styles.root}>
            <div className={styles.btnGroup}>
                <label className={styles.icon}>
                    <input type="checkbox" name="x" />
                    <div className={styles.iconBox}>
                        <i className={styles.fa} aria-hidden="true">
                            Home
                        </i>
                    </div>
                </label>
            </div>
        </div>
    );
};
export default Table;
