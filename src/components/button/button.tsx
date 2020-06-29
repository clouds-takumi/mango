import React, { useEffect } from 'react';
import styles from './button.less';
import cn from 'classnames';

const tuple = <T extends string[]>(...args: T) => args;
const ButtonTypes = tuple('default', 'primary', 'ghost', 'dashed', 'link', 'text');
type ButtonType = typeof ButtonTypes[number];
const ButtonShapes = tuple('circle', 'circle-outline', 'round');
type ButtonShape = typeof ButtonShapes[number];
type SizeType = 'small' | 'middle' | 'large' | undefined;

interface BaseButtonProps {
    type?: ButtonType;
    shape?: ButtonShape;
    size?: SizeType;
    className?: string;
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
}

const Button: React.FC<BaseButtonProps> = props => {
    const { type, shape, size, className, children, onClick } = props;
    console.log(className);
    const handleClick = (e: React.MouseEvent<HTMLInputElement | HTMLAnchorElement>) => {
        if (onClick) {
            (onClick as React.MouseEventHandler<HTMLInputElement | HTMLAnchorElement>)(e);
        }
    };

    useEffect(() => {});

    return (
        <div className={styles.btnRoot}>
            <label className={cn(styles.icon, styles.item)}>
                <input type="checkbox" name="home" onClick={handleClick} />
                <div className={cn(className, styles.iconBox)}>
                    <span className={styles.fa} aria-hidden="true">
                        {children}
                    </span>
                </div>
            </label>
        </div>
    );
};
export default Button;
