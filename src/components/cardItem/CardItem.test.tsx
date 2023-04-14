import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import { character } from '../../test/api/mockCharacters';
import CardItem from './CardItem';

describe('Card Items', () => {
  it('display the "See more" btn', () => {
    render(
      <Provider store={store}>
        <CardItem {...character} />
      </Provider>
    );
    const message = screen.queryByText(/See more/i);
    expect(message).toBeVisible();
  });

  it('display all data', () => {
    render(
      <Provider store={store}>
        <CardItem {...character} />
      </Provider>
    );
    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
