import { Component } from 'react';
import { PropsTypeOtherInput } from '../../../types/types';
import './otherInput.css';

class OtherInput extends Component<PropsTypeOtherInput> {
  render() {
    const { label, type, inputRef, isValid, error, showErrors } = this.props;
    return (
      <label>
        {label}:
        <input
          type={type}
          placeholder={`Add ${label}`}
          ref={inputRef}
          accept={type === 'file' ? 'image/*' : ''}
        />
        {!isValid && showErrors && <div className="error__message">{error}</div>}
      </label>
    );
  }
}

export default OtherInput;
