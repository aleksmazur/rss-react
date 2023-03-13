import { ChangeEvent, Component } from 'react';

class SearchPanel extends Component {
  state = {
    inputText: '',
  };

  componentDidMount() {
    this.setState({
      inputText: localStorage.getItem('search'),
    });
  }

  componentWillUnmount() {
    if (this.state.inputText) {
      localStorage.setItem('search', this.state.inputText);
    }
  }

  handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputText: value,
    });
  };

  render() {
    const { inputText } = this.state;

    return (
      <div className="search__panel">
        <input
          id="searchBar"
          className="search__bar"
          name="searchBar"
          type="text"
          placeholder="Search.."
          value={inputText}
          onChange={this.handleInputChange}
        />
        <button className="btn search__btn">Search</button>
      </div>
    );
  }
}

export default SearchPanel;
