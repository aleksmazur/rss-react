import { Component } from 'react';
import './select.css';

type PropsType = {
  label: string;
  options: number[] | string[];
  inputRef: React.Ref<HTMLSelectElement>;
};

class Select extends Component<PropsType> {
  render() {
    const { label, options, inputRef } = this.props;
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
      </label>
    );
  }
}

export default Select;
