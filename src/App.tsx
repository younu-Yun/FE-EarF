import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { protectedRoutes, routes } from 'routes';
import { getToken, refreshAccessToken } from 'api/token';

function App() {
  const isUserLoggedIn = () => {
    return !!getToken();
  };

  const PrivateRoutes = () => {
    if (isUserLoggedIn()) {
      refreshAccessToken();
      return <Outlet />;
    }

    return <Navigate to='/login' />;
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
