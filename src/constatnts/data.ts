import { Categories, SortingCategories } from '../types';

export const pizzaCategories: Categories[] = [
  { id: 0, category: 'Все' },
  { id: 1, category: 'Мясные' },
  { id: 2, category: 'Вегетарианская' },
  { id: 3, category: 'Гриль' },
  { id: 4, category: 'Острые' },
  { id: 5, category: 'Закрытые' },
];

export const sortingCategories: SortingCategories[] = [
  { id: 0, type: 'популярности (по убыванию)', sort: 'rating', order: 'desc' },
  { id: 1, type: 'популярности (по возрастанию)', sort: 'rating', order: 'asc' },
  { id: 2, type: 'цене (по убыванию)', sort: 'price', order: 'desc' },
  { id: 3, type: 'цене (по возрастанию)', sort: 'price', order: 'asc' },
  { id: 4, type: 'алфавиту (по убыванию)', sort: 'title', order: 'desc' },
  { id: 5, type: 'алфавиту (по возрастанию)', sort: 'title', order: 'asc' },
];
