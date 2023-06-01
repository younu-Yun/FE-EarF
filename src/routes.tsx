import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import MyCommunity from 'pages/MyCommunity';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/mypage/info',
    element: <MyPage />,
  },
  {
    path: '/mypage/mycommunity',
    element: <MyCommunity />,
  },
];

export default routes;
