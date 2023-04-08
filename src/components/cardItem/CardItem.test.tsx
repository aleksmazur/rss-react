import { render, screen } from '@testing-library/react';
import CardItem from './CardItem';

const PropsType = {
  id: 1,
  name: 'Cactus',
  status: 'Alive',
  species: 'Human',
  type: '',
  gender: 'Male',
  origin: {
    name: 'Earth (C-500A)',
    url: 'https://rickandmortyapi.com/api/location/23',
  },
  location: {
    name: 'Earth (C-500A)',
    url: 'https://rickandmortyapi.com/api/location/23',
  },
  image: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
  episode: ['https://rickandmortyapi.com/api/episode/8'],
  url: 'https://rickandmortyapi.com/api/character/183',
  created: '2017-12-29T18:51:29.693Z',
};

describe('Card Items', () => {
  it('display the "See more" btn', () => {
    render(<CardItem {...PropsType} />);
    const message = screen.queryByText(/See more/i);
    expect(message).toBeVisible();
  });

  it('display all data', () => {
    render(<CardItem {...PropsType} />);
    expect(screen.getByText(PropsType.name)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
