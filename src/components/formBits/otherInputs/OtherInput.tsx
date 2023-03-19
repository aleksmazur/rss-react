import { Component } from 'react';
import './otherInput.css';

type PropsType = {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  ref: React.LegacyRef<HTMLInputElement>;
  onChange(event: React.FormEvent<HTMLInputElement>): void;
};

class OtherInput extends Component<PropsType> {
  render() {
    const { label, type, placeholder, value, ref, onChange } = this.props;
    return (
      <label>
        {label}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          required
        />
      </label>
    );
  }
}

export default OtherInput;
