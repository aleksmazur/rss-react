import { CharacterResult } from '../types/types';

const getCharacterById = async (id: number) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);

  const character = (await response.json()) as CharacterResult;

  if (!response.ok) throw new Error(character.error);

  return character;
};

export default getCharacterById;
