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

export type Pizza = {
  id: number | string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
};

export type TypesProperty = 0 | 1;
export type SizesProperty = 26 | 30 | 40;

export type PizzaInCart = Omit<Pizza, 'types' | 'sizes' | 'id'> & {
  id: string;
  count: number;
  totalPrice: number;
  type: TypesProperty;
  size: SizesProperty;
};

export const pizzaTypes: PizzaTypes = {
  0: 'тонкое',
  1: 'традиционное',
};

export type Status = 'loading' | 'success' | 'error';

type SortingTypes =
  | 'популярности (по убыванию)'
  | 'популярности (по возрастанию)'
  | 'цене (по убыванию)'
  | 'цене (по возрастанию)'
  | 'алфавиту (по убыванию)'
  | 'алфавиту (по возрастанию)';

type Category = 'Все' | 'Мясные' | 'Вегетарианская' | 'Гриль' | 'Острые' | 'Закрытые';

type PizzaTypes = {
  [key: string]: string;
};
