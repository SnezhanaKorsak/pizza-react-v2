import { SortingCategories } from '../../constatnts/types';

export type SortProps = {
  sortType: SortingCategories;
  setSortType: (sortCategory: SortingCategories) => void;
};
