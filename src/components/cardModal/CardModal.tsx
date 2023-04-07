import { useEffect, useState } from 'react';
import getCharacterById from '../../api/getCaracterById';
import { CharacterResult } from '../../types/types';

const CardModal = (props: { characterId: number }) => {
  const [character, setCaracter] = useState<CharacterResult>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getCharacterById(props.characterId)
      .then((character) => setCaracter(character))
      .catch((err) => setError(err.message));
    console.log(character, error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return character ? (
    <div key={character.id} className="card__item">
      <img src={character.image} alt="photo" className="card__img" />
      <h3 className="card__item-title">{`Plant '${character.name}'`}</h3>
      <div className="card__item-main">
        <div className="card__item-like">{character.species}</div>
        <div className="card__item-like">{character.gender === 'Male' ? '♂' : '♀'}</div>
      </div>
      <div className="card__item-about">
        <p>{character.location.name}</p>
      </div>
      <div className="card__item-about"></div>
    </div>
  ) : (
    <div>
      <strong>{error ? error : 'Loading...'}</strong>
    </div>
  );
};

export default CardModal;
