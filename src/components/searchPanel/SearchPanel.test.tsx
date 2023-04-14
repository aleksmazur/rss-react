import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import SearchPanel from './SearchPanel';

it('search panel has input', () => {
  render(
    <Provider store={store}>
      <SearchPanel />
    </Provider>
  );
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

it('search panel has input value', () => {
  render(
    <Provider store={store}>
      <SearchPanel />
    </Provider>
  );
  const input = screen.getByDisplayValue('');
  expect(input).toBeNull;
});
