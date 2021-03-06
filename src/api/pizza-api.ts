import axios from 'axios';

import { Pizza } from '../components/PizzaBlock/types';
import { SortingCategories } from '../constatnts/types';

const instance = axios.create({
  baseURL: 'https://62d30b8081cb1ecafa699f5a.mockapi.io',
});

export const pizzaApi = {
  getPizzaData() {
    return instance.get<Pizza[]>('/data');
  },
  sortFilteredPizza(sortType: SortingCategories, category: string, searchValue: string) {
    const { sort, order } = sortType;

    return instance.get<Pizza[]>(`/data?${category}&sortBy=${sort}&order=${order}&search=${searchValue}`);
  },
};
