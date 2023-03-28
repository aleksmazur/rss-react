import { PropsTypeOtherInput } from '../../../types/types';
import './otherInput.css';

const OtherInput = ({ label, type, inputRef, isValid, error, showErrors }: PropsTypeOtherInput) => {
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
};

export default OtherInput;
