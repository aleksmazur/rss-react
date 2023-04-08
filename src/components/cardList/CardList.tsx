import { CaractersListState } from '../../types/types';
import CardItem from '../cardItem/CardItem';
import Preloader from '../preloader/Preloader';
import './cardList.css';

const CardList = (data: CaractersListState) => {
  return data.items.length ? (
    <div className="main__cards">
      <div className="card__list">
        {data.items.map((item) => {
          return <CardItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  ) : (
    <Preloader />
  );
};

export default CardList;
