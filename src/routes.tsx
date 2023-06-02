import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import MyCommunity from 'pages/MyCommunity';
import MyPageEdit from 'pages/MyPageEdit';
import Community from 'pages/Community';
import Calender from 'components/Calender';

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/community',
    element: <Community />,
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
  {
    path: '/calender',
    element: <Calender />,
  },
];

export default routes;
