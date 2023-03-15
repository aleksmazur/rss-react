import { render, screen } from '@testing-library/react';
import Main from './Main';

it('display the correct title', () => {
  render(<Main />);
  const message = screen.queryByText(/Our Home Plants/i);
  expect(message).toBeVisible();
});
