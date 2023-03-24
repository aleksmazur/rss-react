import { Component } from 'react';
import { PropsTypeCheckbox } from '../../../types/types';
import './checkbox.css';

class Checkbox extends Component<PropsTypeCheckbox> {
  render() {
    const { label, inputRef } = this.props;
    return (
      <>
        <label className="form__checkbox-wrapper">
          {label}
          <input type="checkbox" className="form__checkbox" ref={inputRef} />
        </label>
      </>
    );
  }
}

export default Checkbox;
