import { fireEvent, render, screen } from '@testing-library/react';
import Form from './Form';

describe('Form Page', () => {
  it('Display the correct title', () => {
    render(<Form />);
    const message = screen.queryByText(/Add new Plant/i);
    expect(message).toBeVisible();
  });

  it('Display the correct success message', () => {
    window.URL.createObjectURL = vi.fn();
    const mockJpg = new File(['test'], 'test.jpg', { type: 'image/jpg' });
    const { container } = render(<Form />);

    fireEvent.change(screen.getAllByRole('textbox')[0], { target: { value: 'Test' } });
    fireEvent.change(container.querySelector('[type="month"]')!, {
      target: { value: '2021-02' },
    });
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.change(screen.getAllByRole('combobox')[0], { target: { value: 'Mini' } });
    fireEvent.change(screen.getAllByRole('combobox')[1], { target: { value: 2 } });
    fireEvent.change(container.querySelector('[type="file"]')!, {
      target: { files: [mockJpg] },
    });
    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText(/Plant added successfully to the PlantList/i)).toBeInTheDocument();
  });
});
