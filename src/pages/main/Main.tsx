import CardList from '../../components/cardList/CardList';
import Preloader from '../../components/preloader/Preloader';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import { useAppSelector } from '../../hooks/selectors';
import { useSearchCharsQuery } from '../../store/publicApi';

const Main = () => {
  const { search } = useAppSelector((state) => state.search);
  const { isError, isFetching, data } = useSearchCharsQuery(search || '');

  return (
    <div>
      <h2 className="section__title">Our Home Plants</h2>
      <SearchPanel />
      {isError && <h2 className="section__title">Something went wrong...</h2>}
      <div className="main__cards">
        {isFetching && <Preloader />}
        {data && !isError && !isFetching ? <CardList chars={data} /> : null}
      </div>
    </div>
  );
};

export default Main;
