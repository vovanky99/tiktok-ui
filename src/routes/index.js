import HomePages from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/profile';
import Upload from '~/pages/upload';
import { HeaderOnly } from '~/components/layout';
import Search from '~/pages/Search';
//public routes
const publicRoutes = [
    { path: '/', componnet: HomePages },
    { path: '/following', componnet: Following },
    { path: '/profile', componnet: Profile },
    { path: '/upload', componnet: Upload, layout: HeaderOnly },
    { path: '/search', componnet: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
