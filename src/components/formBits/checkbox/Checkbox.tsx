import { Component } from 'react';
import './checkbox.css';

type PropsType = {
  value: boolean;
  label: string;
};

class Checkbox extends Component<PropsType> {
  render() {
    const { value, label } = this.props;
    return (
      <>
        <input type="checkbox" className="form__checkbox" id="care__check" checked={value} />
        <label htmlFor="care__check">{label}</label>
      </>
    );
  }
}

export default Checkbox;
