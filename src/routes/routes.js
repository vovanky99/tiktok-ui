import HomePages from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import { HeaderOnly } from '~/layout';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import config from '~/config';
//public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePages },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
    { path: config.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
