import React from 'react';

type Search = {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
};

const searchDefaultValue: Search = { searchValue: '', setSearchValue: () => {} };

export const SearchContext = React.createContext(searchDefaultValue);
