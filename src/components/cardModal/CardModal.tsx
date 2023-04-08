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
    <div className="modal__overlay" onClick={() => props.setOpen(false)}>
      {character ? (
        <div className="card__modal" onClick={(e) => e.stopPropagation()}>
          <img src={character.image} alt="photo" className="card__img" />
          <h3 className="card__item-title">{character.name}</h3>
          <div className="card__item-main">
            <div className="card__item-like">{character.species}</div>
            <div className="card__item-like">{character.gender}</div>
          </div>
          <p>{character.location.name}</p>
          <p>{character.species}</p>
          <p>{new Date(character.created).toDateString()}</p>
          <span className="close__modal" onClick={() => props.setOpen(false)}></span>
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
