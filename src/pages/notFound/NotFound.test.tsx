import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

it('display the correct title', () => {
  render(<NotFound />);
  const message = screen.queryByText(/Page not found/i);
  expect(message).toBeVisible();
});
