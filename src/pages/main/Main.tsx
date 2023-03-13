import { Component } from 'react';
import CardList from '../../components/cardList/CardList';
import SearchPanel from '../../components/searchPanel/SearchPanel';

class Main extends Component {
  render() {
    return (
      <div>
        Main
        <SearchPanel />
        <CardList />
      </div>
    );
  }
}

export default Main;
