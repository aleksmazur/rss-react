import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { characters } from '../../test/api/mockCharacters';
import CardList from './CardList';

describe('Card Items', () => {
  it('count of list items', () => {
    render(
      <Provider store={store}>
        <CardList chars={characters.results} />
      </Provider>
    );
    const count = screen.getAllByText(/See more/i);
    expect(characters.results.length === count.length);
  });

  it('list without data', () => {
    render(
      <Provider store={store}>
        <CardList chars={characters.results} />
      </Provider>
    );
    const list = screen.queryByRole('list');
    expect(list).toBeNull();
  });
});
