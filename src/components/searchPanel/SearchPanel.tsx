import { ChangeEvent, useEffect, useRef, useState } from 'react';

const SearchPanel = () => {
  const [inputText, setInputText] = useState<string>(localStorage.getItem('search') || '');

  const searchRef = useRef<string>();

  useEffect(() => {
    searchRef.current = inputText;
  }, [inputText]);

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchRef.current || '');
    };
  }, []);

  const handleInputChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setInputText(value);
  };

  return (
    <div className="search__panel">
      <input
        id="searchBar"
        className="search__bar"
        name="searchBar"
        type="text"
        placeholder="Search.."
        value={inputText ? inputText : ''}
        onChange={handleInputChange}
      />
      <button className="btn search__btn">Search</button>
    </div>
  );
};

export default SearchPanel;
