import React from 'react';
import styles from './index.less';
import Button from '../../../components/button';
import { Button as Bt } from 'antd';
const Table: React.FC = props => {
    return (
        <div className={styles.root}>
            <Button
                onClick={e => {
                    console.log(e);
                }}
            >
                my-button
            </Button>

            <Bt type="primary" className={styles.btn}>antd-button</Bt>
        </div>
    );
};
export default Table;
