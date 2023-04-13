import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface appState {
  search: string;
}

const initialState: appState = {
  search: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearchString(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
