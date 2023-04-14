import { ICharacter } from '../../types/types';
import CardItem from '../cardItem/CardItem';
import './cardList.css';

const CardList = (props: { chars: ICharacter[] }) => {
  return (
    <div className="card__list">
      {props.chars.map((item) => {
        return <CardItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default CardList;
