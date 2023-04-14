import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { character } from '../../test/api/mockCharacters';
import CardItem from '../cardItem/CardItem';

describe('Card Modal', () => {
  it('display Card Modal', async () => {
    render(
      <Provider store={store}>
        <CardItem {...character} />
      </Provider>
    );
    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: /See more/i }));
    });
    expect(await screen.findByText(/Male/i)).toBeInTheDocument();
  });

  it('close Card Modal', async () => {
    render(
      <Provider store={store}>
        <CardItem {...character} />
      </Provider>
    );
    const button = screen.getByRole('button', { name: /See more/i });
    await waitFor(() => {
      fireEvent.click(button);
    });
    expect(await screen.findByText(/Male/i)).toBeInTheDocument();

    const overlay = screen.getByTestId('overlay');
    await waitFor(() => {
      fireEvent.click(overlay);
    });
    expect(overlay).not.toBeInTheDocument();
  });
});
