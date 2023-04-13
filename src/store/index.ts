import { configureStore } from '@reduxjs/toolkit';
import { publicApi } from './publicApi';
import { formReducer } from './formSlice';
import { searchReducer } from './searchSlice';

const store = configureStore({
  reducer: {
    [publicApi.reducerPath]: publicApi.reducer,
    form: formReducer,
    search: searchReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(publicApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
