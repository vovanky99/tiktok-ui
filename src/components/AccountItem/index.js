import classNames from 'classnames/bind';
import Style from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Images from '~/components/Images';

const cx = classNames.bind(Style);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Images
                className={cx('avatar')}
                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/6e34532fc12701d8ecbe4ad90ea4682c~c5_300x300.webp?x-expires=1700571600&x-signature=B8ScIfnX5g28yL3mf4Ho17tUYrg%3D"
                alt="aaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>nguyen Van a</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
