import { PropsTypeCheckbox } from '../../../types/types';
import './checkbox.css';

const Checkbox = ({ label, inputRef }: PropsTypeCheckbox) => {
  return (
    <>
      <label className="form__checkbox-wrapper">
        {label}
        <input type="checkbox" className="form__checkbox" ref={inputRef} />
      </label>
    </>
  );
};

export default Checkbox;
