import { createSelector } from 'reselect';

import { RootState } from '../index';

export const selectPizzas = (state: RootState) => state.pizzas;
export const selectCart = (state: RootState) => state.cart;
export const selectFilters = (state: RootState) => state.filter;

export const selectOrder = createSelector(selectCart, (cart) => cart.order);

export const selectCurrentPizza = createSelector(
  [selectOrder, (state, itemId: string) => itemId],
  (order, itemId) => order.find(({ id }) => id === itemId),
);
