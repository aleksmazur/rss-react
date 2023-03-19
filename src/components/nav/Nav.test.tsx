import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from './Nav';

it('display the logo', () => {
  const links = ['Main', 'About'];
  render(
    <Router>
      <Nav />
    </Router>
  );
  links.forEach((link) => {
    const navLink = screen.getByText(link);
    expect(navLink).toBeInTheDocument();
  });
});
