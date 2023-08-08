import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import { protectedRoutes, routes } from 'routes';
import { getToken, refreshAccessToken } from 'api/token';
import { PuffLoader } from 'react-spinners';

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
            <Suspense
              fallback={
                <div>
                  <PuffLoader color='#24AE63' loading size={100} />
                </div>
              }
            >
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
            </Suspense>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
