import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from './publicApi';

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware),
});

export default store;
