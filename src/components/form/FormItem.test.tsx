import { render, screen, fireEvent } from '@testing-library/react';
import FormItem from './FormItem';

describe('Form Item', () => {
  it('Render all form components', () => {
    const mockFn = vi.fn();
    render(<FormItem addCard={mockFn} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toBeDefined();
    expect(screen.getAllByRole('option')).toBeDefined();
    expect(screen.getAllByRole('textbox')).toBeDefined();
    expect(screen.getAllByRole('combobox')).toBeDefined();
    expect(screen.getAllByRole('checkbox')).toBeDefined();
    expect(screen.getAllByRole('radio')).toBeDefined();
  });

  it('All fields are empty', () => {
    const mockFn = vi.fn();
    render(<FormItem addCard={mockFn} />);

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText(/It should contain minimum 3 characters/i)).toBeInTheDocument();
    expect(screen.getByText(/select plant size/i)).toBeInTheDocument();
    expect(screen.getByText(/select plant care/i)).toBeInTheDocument();
    expect(screen.getByText(/select place for plant/i)).toBeInTheDocument();
    expect(screen.getByText(/ select plant blooming period/i)).toBeInTheDocument();
    expect(screen.getByText(/add plantt raiting/i)).toBeInTheDocument();
    expect(screen.getByText(/No image available/i)).toBeInTheDocument();
  });

  it('Invalid title', () => {
    const mockFn = vi.fn();
    const { container } = render(<FormItem addCard={mockFn} />);

    fireEvent.change(container.querySelector('[type="text"]')!, {
      target: { value: 'Hi' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText(/It should contain minimum 3 characters/i)).toBeInTheDocument();
  });

  it('Checkbox checked', () => {
    const mockFn = vi.fn();
    render(<FormItem addCard={mockFn} />);

    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getByText(/Please, select plant care/i)).toBeInTheDocument();
  });

  it('Reset form', () => {
    const mockFn = vi.fn();
    render(<FormItem addCard={mockFn} />);

    fireEvent.click(screen.getAllByRole('radio')[0]);
    fireEvent.click(screen.getAllByRole('checkbox')[0]);

    fireEvent.click(screen.getByRole('button', { name: /Add/i }));

    expect(screen.getAllByRole('checkbox')[0]).not.toHaveAttribute('checked');
    expect(screen.getAllByRole('radio')[0]).not.toHaveAttribute('checked');
  });
});
