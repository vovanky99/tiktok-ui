import HomePages from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import { HeaderOnly } from '~/components/layout';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';
//public routes
const publicRoutes = [
    { path: routesConfig.home, component: HomePages },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
