import { SetStateAction } from 'react';
import { ICharacter } from '../../types/types';
import Preloader from '../preloader/Preloader';
import './cardModal.css';

const CardModal = (props: {
  data: ICharacter | undefined;
  isError: boolean;
  isLoading: boolean;
  setOpen: React.Dispatch<SetStateAction<boolean>>;
}) => {
  const { data, isError, isLoading } = props;
  return (
    <div className="modal__overlay" data-testid="overlay" onClick={() => props.setOpen(false)}>
      <div className="card__modal" onClick={(e) => e.stopPropagation()}>
        {isLoading && <Preloader />}
        {isError && <div>Character not found</div>}
        {data && (
          <>
            <h2 className="card__item-title">About {data.name}</h2>
            <img src={data.image} alt="photo" className="card__img" />
            <div className="card__item-main">
              <div className="card__item-like">{data.species}</div>
              <div className="card__item-like">{data.gender}</div>
            </div>
            <p>{data.location.name}</p>
            <p>{new Date(data.created).toDateString()}</p>
          </>
        )}
        <span className="close__modal" onClick={() => props.setOpen(false)}></span>
      </div>
    </div>
  );
};

export default CardModal;
