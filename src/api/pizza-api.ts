import axios from 'axios';

import { Pizza, SortingCategories } from '../types';

export type PizzaApiRequestData = {
  sortType: SortingCategories;
  category: string;
  searchValue: string;
  currentPage: number;
};

const instance = axios.create({
  baseURL: 'https://62d30b8081cb1ecafa699f5a.mockapi.io',
});

export const pizzaApi = {
  getSortFilteredPizza({ sortType, category, searchValue, currentPage }: PizzaApiRequestData) {
    const { sort, order } = sortType;

    return instance.get<Pizza[]>(
      `/data?${category}&sortBy=${sort}&order=${order}&search=${searchValue}&page=${currentPage}&limit=6`,
    );
  },
};
