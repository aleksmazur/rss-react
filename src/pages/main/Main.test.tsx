import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import Main from './Main';

it('display the correct title', () => {
  render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  const message = screen.queryByText(/Our Home Plants/i);
  expect(message).toBeVisible();
});

it('should render the cards', async () => {
  const { findByText } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
  expect(await findByText(/Rick Sanchez/i)).toBeInTheDocument();
});

it('search panel search elements', async () => {
  const { findByText } = render(
    <Provider store={store}>
      <Main />
    </Provider>
  );
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
