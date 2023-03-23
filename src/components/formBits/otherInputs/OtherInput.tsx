import { Component } from 'react';
import './otherInput.css';

type PropsType = {
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  inputRef: React.Ref<HTMLInputElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

class OtherInput extends Component<PropsType> {
  render() {
    const { label, type, placeholder, required, inputRef, isValid, error, showErrors } = this.props;
    return (
      <label>
        {label}
        <input type={type} placeholder={placeholder} ref={inputRef} required={required} />
        {!isValid && showErrors && <div className="error__message">{error}</div>}
      </label>
    );
  }
}

export default OtherInput;
