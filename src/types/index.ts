export type SortingCategories = {
  id: number;
  type: SortingTypes;
  sort: string;
  order: string;
};

export type Categories = {
  id: number;
  category: Category;
};

type SortingTypes =
  | 'популярности (по убыванию)'
  | 'популярности (по возрастанию)'
  | 'цене (по убыванию)'
  | 'цене (по возрастанию)'
  | 'алфавиту (по убыванию)'
  | 'алфавиту (по возрастанию)';

type Category = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';
