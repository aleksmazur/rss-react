import { SetStateAction, useEffect, useState } from 'react';
import getCharacterById from '../../api/getCaracterById';
import { CharacterResult } from '../../types/types';
import Preloader from '../preloader/Preloader';
import './cardModal.css';

const CardModal = (props: {
  characterId: number;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const [character, setCaracter] = useState<CharacterResult>();
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getCharacterById(props.characterId)
      .then((character) => setCaracter(character))
      .catch((err) => setError(err.message));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="modal__overlay" data-testid="overlay" onClick={() => props.setOpen(false)}>
      {character ? (
        <div className="card__modal" onClick={(e) => e.stopPropagation()}>
          <h2 className="card__item-title">About {character.name}</h2>
          <img src={character.image} alt="photo" className="card__img" />
          <div className="card__item-main">
            <div className="card__item-like">{character.species}</div>
            <div className="card__item-like">{character.gender}</div>
          </div>
          <p>{character.location.name}</p>
          <p>{character.species}</p>
          <p>{new Date(character.created).toDateString()}</p>
          <button className="close__modal" onClick={() => props.setOpen(false)}></button>
        </div>
      ) : (
        <div>
          <strong>{error ? error : <Preloader />}</strong>
        </div>
      )}
    </div>
  );
};

export default CardModal;
