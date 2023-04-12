import { SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import filterCharacters from '../../api/filterByName';
import { CaractersListState } from '../../types/types';

type IProps = {
  setData: React.Dispatch<SetStateAction<CaractersListState>>;
  setInputText: React.Dispatch<SetStateAction<string>>;
  inputText: string;
};

const SearchPanel = ({ setData, inputText, setInputText }: IProps) => {
  const { register, handleSubmit } = useForm<{ value: string }>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ value: string }> = (data) => {
    setData({ items: [], error: '', loading: true });
    setInputText(data.value);
    localStorage.setItem('search', data.value);
    filterCharacters(data.value)
      .then((characters) => setData({ items: characters.results, error: '', loading: false }))
      .catch((err) => setData({ items: [], error: err.message, loading: false }));
  };

  return (
    <form className="search__panel" onSubmit={handleSubmit(onSubmit)}>
      <input
        id="searchBar"
        className="search__bar"
        type="text"
        placeholder="Search.."
        defaultValue={inputText}
        {...register('value')}
      />
      <button className="btn search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
