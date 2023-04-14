import { SubmitHandler, useForm } from 'react-hook-form';
import { useActions } from '../../hooks/actions';
import { useAppSelector } from '../../hooks/selectors';

const SearchPanel = () => {
  const { addSearchString } = useActions();
  const { search } = useAppSelector((state) => state.search);

  const { register, handleSubmit } = useForm<{ value: string }>({
    mode: 'onSubmit',
  });

  const onSubmit: SubmitHandler<{ value: string }> = (data) => {
    addSearchString(data.value);
  };

  return (
    <form className="search__panel" onSubmit={handleSubmit(onSubmit)}>
      <input
        id="searchBar"
        className="search__bar"
        type="text"
        placeholder="Search.."
        defaultValue={search}
        {...register('value')}
      />
      <button className="btn search__btn" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchPanel;
