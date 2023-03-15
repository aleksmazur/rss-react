import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

it('display the logo', () => {
  const props = {
    title: 'string',
  };
  render(
    <Router>
      <Header {...props} />
    </Router>
  );
  const logo = screen.getByRole('img');
  expect(logo).toBeInTheDocument();
});
