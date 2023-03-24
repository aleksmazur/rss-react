import { render, screen } from '@testing-library/react';
import About from './About';

it('display the correct title', () => {
  render(<About />);
  const message = screen.queryByText(/About/i);
  expect(message).toBeVisible();
});
