import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './AccountPreview.module.scss';
import Button from '~/components/buttons';

const cx = classNames.bind(styles);

function AccountPreviews() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    loading="lazy"
                    alt=""
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5a4e6ee972ea9c73b918328553872f9e~c5_100x100.jpeg?x-expires=1701046800&amp;x-signature=tNngzACXgxjxiJPrgrMknZ7Z%2BL8%3D"
                />
                <Button primary className={cx('follow-btn')}>
                    follow
                </Button>
            </header>
            <section className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>NguyenQuocPhu</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>quoocs nguyen phu</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Like</span>
                </p>
            </section>
        </div>
    );
}

export default AccountPreviews;
