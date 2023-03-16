import { Component } from 'react';
import './select.css';

type PropsType = {
  label: string;
  name: string;
  options: string[];
};

class Select extends Component<PropsType> {
  render() {
    const { label, name, options } = this.props;
    return (
      <label>
        {label}
        <select name={name}>
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
