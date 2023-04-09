import { render, screen } from '@testing-library/react';
import SearchPanel from './SearchPanel';
const mockFn = vi.fn();

const IProps = {
  setData: mockFn,
  setInputText: mockFn,
  inputText: '',
};

it('search panel has input', () => {
  render(<SearchPanel {...IProps} />);
  const input = screen.getByRole('textbox');
  expect(input).toBeInTheDocument();
});

it('search panel has input value', () => {
  render(<SearchPanel {...IProps} />);
  const input = screen.getByDisplayValue('');
  expect(input).toBeNull;
});
