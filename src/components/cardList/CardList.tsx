import { Component } from 'react';
import plants from '../../data/data.json';
import './cardList.css';

class CardList extends Component {
  render() {
    console.log(plants);

    return (
      <div>
        <h2>Our Home Plants</h2>
        <div className="card__list">
          {plants.map((plant) => (
            <div key={plant.id} className="card__item">
              <img src={plant.img} alt="photo" className="card__img" />
              <h3>{plant.title}</h3>
              <p>{plant.description}</p>
              <p>{plant.size}</p>
              <p>{plant.style}</p>
              <p>{plant.care}</p>
              <p>{plant.raiting}/5</p>
              <button>See more</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardList;
