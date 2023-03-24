import { Component } from 'react';
import { PropsTypeSwitcher } from '../../../types/types';
import './switcher.css';

class Switcher extends Component<PropsTypeSwitcher> {
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
