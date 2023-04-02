import CardList from '../../components/cardList/CardList';
import SearchPanel from '../../components/searchPanel/SearchPanel';

const Main = () => {
  return (
    <div>
      <h2 className="section__title">Our Home Plants</h2>
      <SearchPanel />
      <CardList />
    </div>
  );
};

export default Main;
