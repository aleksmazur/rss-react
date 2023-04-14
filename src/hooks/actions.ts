import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { formActions } from '../store/formSlice';
import { searchActions } from '../store/searchSlice';

const actions = {
  ...formActions,
  ...searchActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
};
