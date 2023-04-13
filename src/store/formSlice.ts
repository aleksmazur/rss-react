import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardPropsType } from '../types/types';

interface appState {
  cards: CardPropsType[];
}

const initialState: appState = {
  cards: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardPropsType>) {
      state.cards.push(action.payload);
    },
  },
});

export const formActions = formSlice.actions;
export const formReducer = formSlice.reducer;
