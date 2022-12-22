import React, { useMemo, useState } from 'react';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import Cart from './components/pages/Cart';

import './scss/app.scss';
import { SearchContext } from './context';
import Index from './components/pages/FullPizza';

const App = () => {
  const [searchValue, setSearchValue] = useState('');

  const searchProviderValue = useMemo(
    () => ({ searchValue, setSearchValue }),
    [searchValue, setSearchValue],
  );

  return (
    <div className='wrapper'>
      <SearchContext.Provider value={searchProviderValue}>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/pizza/:id' element={<Index />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
