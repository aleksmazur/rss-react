import { Component } from 'react';
import CardList from '../../components/cardList/CardList';
import SearchPanel from '../../components/searchPanel/SearchPanel';

class Main extends Component {
  render() {
    return (
      <div>
        <h2 className="section__title">Our Home Plants</h2>
        <SearchPanel />
        <CardList />
      </div>
    );
  }
}

export default Main;
