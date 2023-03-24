import { Component } from 'react';
import './switcher.css';

type PropsType = {
  value1: string;
  value2: string;
  label: string;
  name: string;
  inputRef1: React.Ref<HTMLInputElement>;
  inputRef2: React.Ref<HTMLInputElement>;
  isValid: boolean;
  error: string;
  showErrors: boolean;
};

class Switcher extends Component<PropsType> {
  render() {
    const { value1, value2, label, name, inputRef1, inputRef2, isValid, error, showErrors } =
      this.props;
    return (
      <div className="switch">
        <p>{label}</p>
        <div className="form__radio-group">
          <label>
            {value1}
            <input type="radio" name={name} value={value1} ref={inputRef1} />
          </label>
          <label>
            {value2}
            <input type="radio" name={name} value={value2} ref={inputRef2} />
          </label>
        </div>
        {!isValid && showErrors && <div className="error__message">{error}</div>}
      </div>
    );
  }
}

export default Switcher;
