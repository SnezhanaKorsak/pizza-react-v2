import { configureStore, combineReducers } from '@reduxjs/toolkit';

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';

import { filterReducer } from './reducers/filterReducer';
import { cartReducer } from './reducers/cartReducer';
import { pizzaReducer } from './reducers/pizzasReducer';

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

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
