import { Component } from 'react';
import './checkbox.css';

type PropsType = {
  label: string;
  inputRef: React.Ref<HTMLInputElement>;
};

class Checkbox extends Component<PropsType> {
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
