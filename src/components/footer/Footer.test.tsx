import { render, screen } from '@testing-library/react';
import Footer from './Footer';

it('display the correct year', () => {
  render(<Footer />);
  const year = screen.getByText('2023');
  expect(year).toBeInTheDocument();
});
