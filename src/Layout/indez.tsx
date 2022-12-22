import React, { useMemo, useState } from 'react';
import { SearchContext } from '../context';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header';

const Layout = () => {
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
          <Outlet />
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default Layout;
