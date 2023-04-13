import { ICharacter } from '../../types/types';
import { useState } from 'react';
import CardModal from '../cardModal/CardModal';
import { useLazyGetCharByIdQuery } from '../../store/publicApi';

const CardItem = ({ id, image, name }: ICharacter) => {
  const [open, setOpen] = useState<boolean>(false);
  const [fetchChar, { isError, isLoading, data }] = useLazyGetCharByIdQuery();

  const clickHandler = (id: number) => {
    setOpen(true);
    fetchChar(10000 + id);
  };

  return (
    <>
      <div key={id} className="card__item">
        <img src={image} alt="photo" className="card__img" />
        <h3 className="card__item-title">{name}</h3>
        <button onClick={() => clickHandler(id)}>See more</button>
      </div>
      {open && <CardModal data={data} isError={isError} isLoading={isLoading} setOpen={setOpen} />}
    </>
  );
};

export default CardItem;
