import { Characters } from '../types/types';

const getCharacters = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  const characters = (await response.json()) as Characters;

  if (!characters.results.length && response.ok) throw new Error('Error: you have empty data!');

  return characters;
};

export default getCharacters;
