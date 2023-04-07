import { CharacterResult } from '../types/types';

const getCharacterById = async (id: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const character = (await response.json()) as CharacterResult;

  if (!character.id && response.ok) throw new Error('Error: you have empty data!');

  return character;
};

export default getCharacterById;
