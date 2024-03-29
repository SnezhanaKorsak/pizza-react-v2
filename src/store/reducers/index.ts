import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import { filterReducer } from './filterReducer';
import { cartReducer } from './cartReducer';
import { pizzaReducer } from './pizzasReducer';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['cart'],
};

const cartPersistConfig = {
  key: 'cart',
  storage: storage,
};

const rootReducer = combineReducers({
  cart: persistReducer(cartPersistConfig, cartReducer),
  filter: filterReducer,
  pizzas: pizzaReducer,
});

export const persistedReducer = persistReducer(rootPersistConfig, rootReducer);
