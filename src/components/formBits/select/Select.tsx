import { Component } from 'react';
import { PropsTypeSelect } from '../../../types/types';
import './select.css';

class Select extends Component<PropsTypeSelect> {
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
