import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../store';
import CardItem from './CardItem';

const PropsType = {
  id: 1,
  title: 'Cactus',
  size: 'mini',
  raiting: 2,
  description: 'string',
  care: ['water'],
  place: 'string',
  blooming: 'string',
  img: 'string',
  like: true,
};

describe('Card Items', () => {
  it('display all data', () => {
    render(
      <Provider store={store}>
        <CardItem {...PropsType} />
      </Provider>
    );
    expect(screen.getByText(PropsType.title)).toBeInTheDocument();
    expect(screen.getByText(PropsType.care[0])).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('display month', () => {
    render(<CardItem {...PropsType} />);
    expect(screen.getByText(PropsType.blooming)).toBeInTheDocument();
  });
});
