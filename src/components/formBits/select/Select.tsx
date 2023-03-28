import { PropsTypeSelect } from '../../../types/types';
import './select.css';

const Select = ({ label, options, inputRef, isValid, error, showErrors }: PropsTypeSelect) => {
  return (
    <label>
      {label}
      <select ref={inputRef} className="select">
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      {!isValid && showErrors && <div className="error__message">{error}</div>}
    </label>
  );
};

export default Select;
