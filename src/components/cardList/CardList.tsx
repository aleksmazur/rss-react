import { Component } from 'react';
import plants from '../../data/data.json';
import CardItem from '../cardItem/CardItem';
import './cardList.css';

class CardList extends Component {
  render() {
    return (
      <div className="main__cards">
        <div className="card__list">
          {plants.map((plantItem, index) => {
            return <CardItem {...plantItem} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default CardList;
