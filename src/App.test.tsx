import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

it('display the app title logo', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const app = screen.getByText(/GreenPlant/);
  expect(app).toBeVisible();
});
