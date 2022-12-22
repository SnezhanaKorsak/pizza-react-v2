import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { PizzaInCart } from '../../types';
import { getTotalCount, getTotalPrice } from '../../utils';

export type InitialState = {
  order: PizzaInCart[];
  totalPizzasCount: number;
  totalCartPrice: number;
};

const initialState: InitialState = {
  order: [],
  totalPizzasCount: 0,
  totalCartPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setPizza: (state, action: PayloadAction<PizzaInCart>) => {
      const { id: currentId, price } = action.payload;
      const pizza = state.order.find(({ id }) => id === currentId);

      if (pizza) {
        pizza.count += 1;
        pizza.totalPrice += price;
      } else {
        const newOrderedPizza = { ...action.payload, currentId };
        state.order.push(newOrderedPizza);
      }

      state.totalPizzasCount = getTotalCount(state.order);
      state.totalCartPrice = getTotalPrice(state.order);
    },
    increaseCount: (state, action: PayloadAction<{ id: string }>) => {
      const currentPizza = state.order.find((item) => item.id === action.payload.id);

      if (currentPizza) {
        currentPizza.count += 1;
        currentPizza.totalPrice += currentPizza.price;
      }

      state.totalPizzasCount = getTotalCount(state.order);
      state.totalCartPrice = getTotalPrice(state.order);
    },
    decreaseCount: (state, action: PayloadAction<{ id: string }>) => {
      const currentPizza = state.order.find((item) => item.id === action.payload.id);

      if (currentPizza && currentPizza.count > 0) {
        currentPizza.count -= 1;
        currentPizza.totalPrice -= currentPizza.price;
      }

      state.totalPizzasCount = getTotalCount(state.order);
      state.totalCartPrice = getTotalPrice(state.order);
    },
    deletePizzaItem: (state, action: PayloadAction<{ id: string }>) => {
      state.order = state.order.filter((item) => item.id !== action.payload.id);

      state.totalPizzasCount = getTotalCount(state.order);
      state.totalCartPrice = getTotalPrice(state.order);
    },

    clearCart: (state) => {
      state.order = [];
      state.totalPizzasCount = 0;
      state.totalCartPrice = 0;
    },
  },
});

export const { setPizza, increaseCount, decreaseCount, deletePizzaItem, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
