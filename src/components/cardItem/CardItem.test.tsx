import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';

it('display the "See more" btn', () => {
  const PropsType = {
    id: 1,
    title: 'string',
    size: 'string',
    raiting: 2,
    description: 'string',
    care: ['string'],
    place: 'string',
    blooming: 'string',
    img: 'string',
    like: true,
  };
  render(<CardItem {...PropsType} />);
  const message = screen.queryByText(/See more/i);
  expect(message).toBeVisible();
});
