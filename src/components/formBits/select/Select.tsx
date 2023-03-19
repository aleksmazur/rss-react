import { Component } from 'react';
import './select.css';

type PropsType = {
  label: string;
  name: string;
  options: number[] | string[];
  value: number | string;
  ref: string;
  onChange(event: React.FormEvent<HTMLSelectElement>): void;
};

class Select extends Component<PropsType> {
  render() {
    const { label, name, options, value, ref, onChange } = this.props;
    return (
      <label>
        {label}
        <select name={name} value={value} ref={ref} onChange={onChange}>
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
