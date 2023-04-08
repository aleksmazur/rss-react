import { CharacterResult } from '../../types/types';
import { useState } from 'react';
import CardModal from '../cardModal/CardModal';

const CardItem = ({ id, image, name, gender, species, location }: CharacterResult) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div key={id} className="card__item">
      <img src={image} alt="photo" className="card__img" />
      <h3 className="card__item-title">{`Plant '${name}'`}</h3>
      <div className="card__item-main">
        <div className="card__item-like">{species}</div>
        <div className="card__item-like">{gender}</div>
      </div>

      <div className="card__item-about">
        <p>{location.name}</p>
      </div>
      <div className="card__item-about"></div>
      <button onClick={() => setOpen(true)}>See more</button>
      {open && <CardModal characterId={id} />}
    </div>
  );
};

export default CardItem;
