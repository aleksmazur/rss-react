import { Component } from 'react';
import './checkbox.css';

type PropsType = {
  value: boolean;
  label: string;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
};

class Checkbox extends Component<PropsType> {
  render() {
    const { value, label, onChange } = this.props;
    return (
      <>
        <input
          type="checkbox"
          className="form__checkbox"
          id="care__check"
          checked={value}
          onChange={onChange}
        />
        <label htmlFor="care__check">{label}</label>
      </>
    );
  }
}

export default Checkbox;
