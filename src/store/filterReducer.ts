import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { SortingCategories } from '../types';

export interface FilterState {
  categoryId: number;
  sort: SortingCategories;
}

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    id: 0,
    type: 'популярности (по убыванию)',
    sort: 'rating',
    order: 'desc',
  },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    setSort: (state, action: PayloadAction<SortingCategories>) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategoryId, setSort } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
