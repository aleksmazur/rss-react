import { useEffect, useState } from 'react';
import getCharacters from '../../api/getCaracters';
import { CaractersListState } from '../../types/types';
import CardItem from '../cardItem/CardItem';
import './cardList.css';

const CardList = () => {
  const [data, setData] = useState<CaractersListState>({ items: [], error: '' });

  useEffect(() => {
    getCharacters()
      .then((characters) => setData({ items: characters.results, error: '' }))
      .catch((err) => setData({ items: [], error: err.message }));
    console.log(data);
  }, []);

  return data.items.length ? (
    <div className="main__cards">
      <div className="card__list">
        {data.items.map((item) => {
          return <CardItem {...item} key={item.id} />;
        })}
      </div>
    </div>
  ) : (
    <div>
      <strong>{data.error ? data.error : 'Loading...'}</strong>
    </div>
  );
};

export default CardList;
