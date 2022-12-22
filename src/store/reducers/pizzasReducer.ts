import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { Pizza, Status } from '../../types';
import { pizzaApi, PizzaApiRequestData } from '../../api/pizza-api';

export type InitialState = {
  status: Status;
  pizzasList: Pizza[];
};

const initialState: InitialState = {
  status: '' as Status,
  pizzasList: [],
};

export const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.status = 'success';
      state.pizzasList = action.payload;
    });
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = 'error';
      state.pizzasList = [];
      console.log('Error', action.error);
    });
  },
});

export const pizzaReducer = pizzaSlice.reducer;

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizzas',
  async (params: PizzaApiRequestData) => {
    const { data } = await pizzaApi.getSortFilteredPizza(params);

    return data;
  },
);
