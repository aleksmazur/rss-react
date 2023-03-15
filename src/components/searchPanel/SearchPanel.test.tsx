import { render, screen } from '@testing-library/react';
import SearchPanel from './SearchPanel';

it('search panel has input', () => {
  render(<SearchPanel />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

it('search panel has input value', () => {
  render(<SearchPanel />);
  const input = screen.getByDisplayValue('');
  expect(input).toBeNull;
});
