import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import CardItem from '../cardItem/CardItem';
import CardModal from './CardModal';

const Card = {
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
};

const mockFn = vi.fn();

const ModalProps = {
  characterId: 361,
  setOpen: mockFn,
};

describe('Card Modal', () => {
  it('display Card Modal', async () => {
    render(<CardItem {...Card} />);
    fireEvent.click(screen.getByRole('button', { name: /See more/i }));

    await waitFor(() => {
      expect(screen.getByText(/Toxic Rick/i)).toBeInTheDocument();
    });
  });

  it('close Card Modal', async () => {
    render(<CardItem {...Card} />);
    fireEvent.click(screen.getByRole('button', { name: /See more/i }));
    render(<CardModal {...ModalProps} />);

    await waitFor(() => {
      expect(screen.getByText(/Toxic Rick/i)).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole('img'));
    await waitFor(() => {
      expect(screen.getByText(/Toxic Rick/i)).toBeInTheDocument();
    });
  });
});
