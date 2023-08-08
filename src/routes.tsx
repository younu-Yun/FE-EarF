import React from 'react';

const Home = React.lazy(() => import('pages/Home'));
const MyPage = React.lazy(() => import('pages/MyPage'));
const MyCommunity = React.lazy(() => import('pages/MyCommunity'));
const MyPageEdit = React.lazy(() => import('pages/MyPageEdit'));
const Community = React.lazy(() => import('pages/Community'));
const CommunityPosting = React.lazy(() => import('pages/CommunityPosting'));
const Boast = React.lazy(() => import('pages/Boast'));
const Calender = React.lazy(() => import('pages/Calendar'));
const Login = React.lazy(() => import('pages/Login'));
const Join = React.lazy(() => import('pages/Join'));
const FindId = React.lazy(() => import('pages/FindId'));
const FindPassword = React.lazy(() => import('pages/FindPassword'));
const ChangePassword = React.lazy(() => import('pages/ChangePassword'));
const MyBadge = React.lazy(() => import('pages/MyBadge'));
const CommunityPost = React.lazy(() => import('pages/CommunityPost'));
const EditCommunityPosting = React.lazy(() => import('pages/EditCommunityPosting'));

export const protectedRoutes = [
  {
    path: '/community/question/post',
    element: <CommunityPosting />,
  },
  {
    path: '/community/question/:postId/edit',
    element: <EditCommunityPosting />,
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
    path: '/mypage/badge',
    element: <MyBadge />,
  },
  {
    path: '/calender',
    element: <Calender />,
  },
  {
    path: '/change_password',
    element: <ChangePassword />,
  },
];
export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/community',
    element: <Community />,
  },
  {
    path: '/community/boast',
    element: <Boast />,
  },
  {
    path: '/community/question/:postId',
    element: <CommunityPost />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/join',
    element: <Join />,
  },
  {
    path: '/find_id',
    element: <FindId />,
  },
  {
    path: '/find_password',
    element: <FindPassword />,
  },
];
