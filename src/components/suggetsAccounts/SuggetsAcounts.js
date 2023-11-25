import styles from './suggetsAcounts.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import AccountItems from './AccountItems';

const cx = classNames.bind(styles);

function SuggetsAcounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItems />
            <AccountItems />
            <AccountItems />
            <p className={cx('more-btn')}>see more</p>
        </div>
    );
}

SuggetsAcounts.propTypes = {
    label: PropTypes.string.isRequired,
};

export default SuggetsAcounts;
