import { render, screen } from '@testing-library/react';
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
  it('display the "See more" btn', () => {
    render(<CardItem {...PropsType} />);
    const message = screen.queryByText(/See more/i);
    expect(message).toBeVisible();
  });

  it('display all data', () => {
    render(<CardItem {...PropsType} />);
    expect(screen.getByText(PropsType.title)).toBeInTheDocument();
    expect(screen.getByText(PropsType.care[0])).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('display month', () => {
    render(<CardItem {...PropsType} />);
    expect(screen.getByText(PropsType.blooming)).toBeInTheDocument();
  });
});
