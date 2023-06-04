import Home from 'pages/Home';
import MyPage from 'pages/MyPage';
import MyCommunity from 'pages/MyCommunity';
import MyPageEdit from 'pages/MyPageEdit';
import Community from 'pages/Community';
import CommunityPosting from 'pages/CommunityPosting';
import Calender from 'components/Calender';
import Login from 'pages/Login';

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
    path: '/community/post',
    element: <CommunityPosting />,
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
  {
    path: '/login',
    element: <Login />,
  },
];

export default routes;
