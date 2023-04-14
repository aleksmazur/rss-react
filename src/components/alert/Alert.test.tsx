import { render, screen } from '@testing-library/react';
import React from 'react';
import Alert from './Alert';

it('display the correct message', () => {
  const props = {
    success: true,
  };
  render(<Alert {...props} />);
  const message = screen.queryByText(/Plant added successfully to the PlantList/i);
  expect(message).toBeVisible();
});
