import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import routes from 'routes';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <BrowserRouter>
          <Header />
          <div id='container'>
            <Routes>
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
