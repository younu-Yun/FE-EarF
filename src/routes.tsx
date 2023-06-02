import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import MyCommunity from 'pages/MyCommunity';
import MyPageEdit from 'pages/MyPageEdit';

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
    path: '/mypage/edit',
    element: <MyPageEdit />,
  },
  {
    path: '/mypage/mycommunity',
    element: <MyCommunity />,
  },
];

export default routes;
