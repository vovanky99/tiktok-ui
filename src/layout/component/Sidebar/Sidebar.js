import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import config from '~/config';
import SuggetsAccounts from '~/components/suggetsAccounts';
import Menu, { MenuItem } from './menu';
import { HomeIcon, HomeActiveIcon, FollowIcon, LiveIcon, FollowActiveIcon, LiveActiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowIcon />}
                    activeIcon={<FollowActiveIcon />}
                />
                <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
            <div>
                <SuggetsAccounts label={'suggested accounts'} />
                {/* <SuggetsAccounts label={'following accounts'} /> */}
            </div>
        </aside>
    );
}
export default Sidebar;
