import { Component } from 'react';
import CardList from '../../components/cardList/CardList';
import SearchPanel from '../../components/searchPanel/SearchPanel';

class Main extends Component {
  render() {
    return (
      <div>
        Main
        <h2>Our Home Plants</h2>
        <SearchPanel />
        <CardList />
      </div>
    );
  }
}

export default Main;
