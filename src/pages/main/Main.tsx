import { useState } from 'react';
import CardList from '../../components/cardList/CardList';
import Preloader from '../../components/preloader/Preloader';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import { useSearchCharsQuery } from '../../store/publicApi';

const Main = () => {
  const [inputText, setInputText] = useState<string>(localStorage.getItem('search') || '');
  const { isError, isLoading, data } = useSearchCharsQuery(inputText);

  return (
    <div>
      <h2 className="section__title">Our Home Plants</h2>
      <SearchPanel inputText={inputText} setInputText={setInputText} />
      {isError && <h2 className="section__title">Something went wrong...</h2>}
      <div className="main__cards">
        {isLoading ? <Preloader /> : data ? <CardList chars={data} /> : null}
      </div>
    </div>
  );
};

export default Main;
