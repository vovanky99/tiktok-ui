import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './suggetsAcounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreviews = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <div className={cx('preview')}>
                        <AccountPreview />
                    </div>
                </PopperWrapper>
            </div>
        );
    };
    return (
        //Using a wrapper <div> tag around the reference element solves this by creating a new parentNode context.
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-40, 0]} placement="bottom" render={renderPreviews}>
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        loading="lazy"
                        alt=""
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5a4e6ee972ea9c73b918328553872f9e~c5_100x100.jpeg?x-expires=1701046800&amp;x-signature=tNngzACXgxjxiJPrgrMknZ7Z%2BL8%3D"
                    />

                    <div className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            <strong>NguyenQuocPhu</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                        </h4>
                        <p className={cx('name')}>quoocs nguyen phu</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
