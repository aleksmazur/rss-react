import { render, screen } from '@testing-library/react';
import CardList from './CardList';
import plants from '../../data/data.json';

it('count of list items', () => {
  render(<CardList />);
  const count = screen.getAllByText(/See more/i);
  expect(plants.length === count.length);
});

it('list without data', () => {
  render(<CardList />);
  const list = screen.queryByRole('list');
  expect(list).toBeNull();
});
