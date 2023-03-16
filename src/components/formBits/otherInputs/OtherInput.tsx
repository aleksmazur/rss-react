import { Component } from 'react';
import './otherInput.css';

type PropsType = {
  label: string;
  type: string;
  placeholder: string;
};

class OtherInput extends Component<PropsType> {
  render() {
    const { label, type, placeholder } = this.props;
    return (
      <label>
        {label}
        <input type={type} placeholder={placeholder} required />
      </label>
    );
  }
}

export default OtherInput;
