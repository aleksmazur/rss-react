import { CharacterResult } from '../../types/types';
import { useState } from 'react';
import CardModal from '../cardModal/CardModal';

const CardItem = ({ id, image, name }: CharacterResult) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div key={id} className="card__item">
      <img src={image} alt="photo" className="card__img" />
      <h3 className="card__item-title">{name}</h3>
      <button onClick={() => setOpen(true)}>See more</button>
      {open && <CardModal characterId={id} setOpen={setOpen} />}
    </div>
  );
};

export default CardItem;
