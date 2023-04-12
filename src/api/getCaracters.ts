import { Characters } from '../types/types';

const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  const characters = (await response.json()) as Characters;

  if (!response.ok) throw new Error(characters.error);

  return characters;
};

export default getCharacters;
