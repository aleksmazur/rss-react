import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../../store';
import Form from './Form';

describe('Form Page', () => {
  it('Display the correct title', () => {
    render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const message = screen.queryByText(/Add new Plant/i);
    expect(message).toBeVisible();
  });

  it('Display the correct success message', async () => {
    window.URL.createObjectURL = vi.fn();
    const image = new File([''], 'picture.jpeg', { type: 'image/jpeg' });
    const { container } = render(
      <Provider store={store}>
        <Form />
      </Provider>
    );
    const input = screen.getByLabelText(/image/i);
    await userEvent.upload(input, image);
    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Test' } });
    fireEvent.change(container.querySelector('[type="month"]')!, {
      target: { value: '2021-02' },
    });
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 'Mini' } });
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 2 } });
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));
    await waitFor(() => {
      expect(screen.getByText(/Plant added successfully to the PlantList/i)).toBeInTheDocument();
    });
  });
});
