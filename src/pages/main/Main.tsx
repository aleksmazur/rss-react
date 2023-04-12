import { useEffect, useState } from 'react';
import filterCharacters from '../../api/filterByName';
import getCharacters from '../../api/getCaracters';
import CardList from '../../components/cardList/CardList';
import Preloader from '../../components/preloader/Preloader';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import { CaractersListState } from '../../types/types';

const Main = () => {
  const [data, setData] = useState<CaractersListState>({ items: [], error: '', loading: true });
  const [inputText, setInputText] = useState<string>(localStorage.getItem('search') || '');

  useEffect(() => {
    inputText === ''
      ? getCharacters()
          .then((characters) => setData({ items: characters.results, error: '', loading: false }))
          .catch((err) => setData({ items: [], error: err.message, loading: false }))
      : filterCharacters(inputText)
          .then((characters) => setData({ items: characters.results, error: '', loading: false }))
          .catch((err) => setData({ items: [], error: err.message, loading: false }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2 className="section__title">Our Home Plants</h2>
      <SearchPanel setData={setData} inputText={inputText} setInputText={setInputText} />
      {data.error ? (
        <h2 className="section__title">{data.error}</h2>
      ) : data.loading ? (
        <Preloader />
      ) : (
        <CardList {...data} />
      )}
    </div>
  );
};

export default Main;
