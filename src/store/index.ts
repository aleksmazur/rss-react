import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from './publicApi';
import { formReducer } from './slice';

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    form: formReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
