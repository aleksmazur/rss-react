import { Characters } from '../types/types';

const filterCharacters = async (value: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${value}`);

  const characters = (await response.json()) as Characters;

  if (!response.ok) throw new Error(characters.error);

  return characters;
};

export default filterCharacters;
