import classNames from 'classnames/bind';
import Styles from './/buttons.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(Styles);

function Button({
    to,
    href,
    onClick,
    className,
    leftIcon,
    rightIcon,
    rounded = false,
    primary = false,
    outline = false,
    disabled = false,
    text = false,
    small = false,
    large = false,
    children,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        Object.keys(props).forEach((propKey) => {
            if (propKey.startsWith('on') && typeof props[propKey] === 'function') {
                delete props[propKey];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    const classes = cx('wrapper', {
        primary,
        large,
        small,
        outline,
        text,
        disabled,
        rounded,
        [className]: className,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
export default Button;
