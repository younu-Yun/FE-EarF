import Home from "pages/Home";
import Mypage from "pages/Mypage";

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/mypage',
    element: <Mypage />,
  },
];

export default routes;