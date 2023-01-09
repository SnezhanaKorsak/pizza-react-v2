import React, { Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Layout from './Layout';

const Cart = React.lazy(() => import('./components/pages/Cart'));
const NotFound = React.lazy(() => import('./components/pages/NotFound'));
const FullPizza = React.lazy(() => import('./components/pages/FullPizza'));

import './scss/app.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Home />} />
        <Route
          path='cart'
          element={
            <Suspense fallback={null}>
              <Cart />
            </Suspense>
          }
        />
        <Route
          path='pizza/:id'
          element={
            <Suspense fallback={null}>
              <FullPizza />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={null}>
              <NotFound />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
