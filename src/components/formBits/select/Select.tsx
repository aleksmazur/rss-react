import { Component } from 'react';
import './select.css';

type PropsType = {
  label: string;
  options: (number | undefined)[] | (string | undefined)[];
  inputRef: React.Ref<HTMLSelectElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

class Select extends Component<PropsType> {
  render() {
    const { label, options, inputRef, isValid, error, showErrors } = this.props;
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
  }
}

export default Select;
