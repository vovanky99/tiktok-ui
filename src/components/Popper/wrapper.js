import classNames from 'classnames/bind';
import Styles from './popper.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(Styles);

function Wrapper({ children, className }) {
    return <div className={cx('wrapper', className)}>{children}</div>;
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default Wrapper;
