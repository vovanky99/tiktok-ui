import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUpload,
    faCloudUpload,
    faMessage,
    faUserCircle,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';

import Button from '~/components/buttons';
import Menu from '~/components/Popper/Menu';
import { MessengerIcon, InboxIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Images';
import Search from '~/components/layout/component/search';
import routesConfig from '~/config/routes';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    type: 'language',
                    code: 'CN',
                    title: 'Chinese',
                },
            ],
        },
    },
    { icon: <FontAwesomeIcon icon={faCircleQuestion} />, title: 'FeedBack And Help', to: '/feedbacks' },
    { icon: <FontAwesomeIcon icon={faKeyboard} />, title: 'Keyboard Shortcuts' },
];
function Header() {
    const currentUser = true;

    //handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                //handle change language
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUserCircle} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <Search />
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon width="2.5rem" height="2.5rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessengerIcon width="2.5rem" height="2.5rem" />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon width="2.5rem" height="2.5rem" />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <div>
                            <Button text>Up Load</Button>
                            <Button primary>Log in</Button>
                        </div>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/7aa535b2f5b4c4030fa29c076b250d14~c5_100x100.jpeg?x-expires=1700715600&x-signature=xvd%2FkRJEDch2tXS4ctaF32xKzKw%3D"
                                alt="nguyenvana"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
