import React from 'react';
import styles from './index.less';
import cn from 'classnames';
const Button: React.FC = props => {
    return (
        <div className={styles.root}>
            <div className={styles.btnGroup}>
                <label className={cn(styles.icon, styles.item)}>
                    <input type="checkbox" name="home" />
                    <div className={styles.iconBox}>
                        <span className={styles.fa} aria-hidden="true">
                            smg
                        </span>
                    </div>
                </label>
                <label className={cn(styles.icon, styles.item)}>
                    <input type="checkbox" name="home" />
                    <div className={styles.iconBox}>
                        <span className={styles.fa} aria-hidden="true">
                            4am
                        </span>
                    </div>
                </label>
                <label className={cn(styles.icon, styles.item)}>
                    <input type="checkbox" name="home" />
                    <div className={styles.iconBox}>
                        <span className={styles.fa} aria-hidden="true">
                            faze
                        </span>
                    </div>
                </label>

                <div className={styles.iconRoot}>
                    <div className={cn(styles.iconWrap, styles.neumorphic)}>
                        <div>
                            <input
                                type="color"
                                name="color"
                                id="color"
                                value="#45494c"
                                className={styles.neumorphicX}
                                onInput={() => {}}
                            />
                            颜色变换
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Button;
