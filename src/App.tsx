import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { protectedRoutes, routes } from 'routes';

function App() {
  const PrivateRoutes = () => {
    // accessToken으로 인증 추가
    // 코드 작성을 위해 true로 값을 지정해놓음
    const auth = true;
    return auth ? <Outlet /> : <Navigate to='/login' />;
  };
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div id='container'>
            <Routes>
              <Route element={<PrivateRoutes />}>
                {protectedRoutes.map(({ path, element }) => {
                  return <Route key={path} path={path} element={element} />;
                })}
              </Route>
              {routes.map(({ path, element }) => {
                return <Route key={path} path={path} element={element} />;
              })}
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
