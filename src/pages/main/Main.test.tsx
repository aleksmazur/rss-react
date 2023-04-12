import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Main from './Main';

it('display the correct title', () => {
  render(<Main />);
  const message = screen.queryByText(/Our Home Plants/i);
  expect(message).toBeVisible();
});

it('should render the cards', async () => {
  const { findByText } = render(<Main />);
  expect(await findByText(/Rick Sanchez/i)).toBeInTheDocument();
});

it('search panel search elements', async () => {
  const { findByText } = render(<Main />);
  const input = screen.getByRole('textbox');
  await waitFor(() => {
    fireEvent.input(input, 'Rick');
  });
  await waitFor(() => {
    fireEvent.click(screen.getByRole('button', { name: /Search/i }));
  });
  expect(await findByText(/Rick Sanchez/i)).toBeInTheDocument();
  expect(screen.queryByText(/Morty/i)).not.toBeInTheDocument();
});
