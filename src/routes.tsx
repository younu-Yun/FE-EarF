import Home from 'pages/Home';
import Mypage from 'pages/Mypage';
import MyCommunity from 'pages/MyCommunity';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/mypage/info',
    element: <Mypage />,
  },
  {
    path: '/mypage/mycommunity',
    element: <MyCommunity />,
  },
];

export default routes;
