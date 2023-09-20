import { configureStore } from "@reduxjs/toolkit";
import { carReducer } from "./carSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'car',
  storage,
  whitelist: ['favorite'],
};

const persistedReducer = persistReducer(persistConfig, carReducer);

export const store = configureStore({
    reducer: {
        cars: persistedReducer,
    },
     middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)