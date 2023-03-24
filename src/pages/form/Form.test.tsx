import { render, screen } from '@testing-library/react';
import Form from './Form';

it('display the correct title', () => {
  render(<Form />);
  const message = screen.queryByText(/Add new Plant/i);
  expect(message).toBeVisible();
});
