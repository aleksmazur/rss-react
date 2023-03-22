import { Component } from 'react';
import './otherInput.css';

type PropsType = {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  inputRef: React.Ref<HTMLInputElement>;
};

class OtherInput extends Component<PropsType> {
  render() {
    const { label, type, placeholder, required, inputRef } = this.props;
    return (
      <label>
        {label}
        <input type={type} placeholder={placeholder} ref={inputRef} required={required} />
      </label>
    );
  }
}

export default OtherInput;
