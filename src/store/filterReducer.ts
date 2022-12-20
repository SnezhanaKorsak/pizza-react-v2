import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { SortingCategories } from '../types';

export interface FilterState {
  categoryId: number;
  currentPage: number;
  sort: SortingCategories;
}

const initialState: FilterState = {
  categoryId: 0,
  currentPage: 1,
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
    setPageCount: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setFilters: (state, action: PayloadAction<FilterState>) => {
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
      state.sort = action.payload.sort;
    },
  },
});

export const { setCategoryId, setSort, setPageCount, setFilters } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
