import { SetStateAction } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useActions } from '../../hooks/actions';

type IProps = {
  setInputText: React.Dispatch<SetStateAction<string>>;
  inputText: string;
};

const SearchPanel = ({ inputText, setInputText }: IProps) => {
  const { addSearchString } = useActions();

  const { register, handleSubmit } = useForm<{ value: string }>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ value: string }> = (data) => {
    setInputText(data.value);
    addSearchString(data.value);
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
