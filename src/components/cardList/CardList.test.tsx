import { render, screen } from '@testing-library/react';
import CardList from './CardList';

const PropsType = {
  items: [
    {
      id: 361,
      name: 'Toxic Rick',
      status: 'Dead',
      species: 'Humanoid',
      type: "Rick's Toxic Side",
      gender: 'Male',
      origin: {
        name: 'Alien Spa',
        url: 'https://rickandmortyapi.com/api/location/64',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/27'],
      url: 'https://rickandmortyapi.com/api/character/361',
      created: '2018-01-10T18:20:41.703Z',
    },
    {
      id: 362,
      name: 'Toxic Rick',
      status: 'Dead',
      species: 'Humanoid',
      type: "Rick's Toxic Side",
      gender: 'Male',
      origin: {
        name: 'Alien Spa',
        url: 'https://rickandmortyapi.com/api/location/64',
      },
      location: {
        name: 'Earth',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/27'],
      url: 'https://rickandmortyapi.com/api/character/361',
      created: '2018-01-10T18:20:41.703Z',
    },
  ],
  error: '',
  loading: false,
};

describe('Card Items', () => {
  it('count of list items', () => {
    render(<CardList {...PropsType} />);
    const count = screen.getAllByText(/See more/i);
    expect(PropsType.items.length === count.length);
  });

  it('list without data', () => {
    render(<CardList {...PropsType} />);
    const list = screen.queryByRole('list');
    expect(list).toBeNull();
  });
});
