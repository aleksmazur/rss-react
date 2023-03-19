import { Component } from 'react';
import './switcher.css';

type PropsType = {
  value1: string;
  value2: string;
  value: boolean;
  label: string;
  ref: React.RefObject<HTMLInputElement>;
  onChange(): void;
};

class Switcher extends Component<PropsType> {
  render() {
    const { value1, value2, label, value, ref, onChange } = this.props;
    return (
      <label className="switch">
        {label}
        <span className="value1">{value1}</span>
        <div className="switcher">
          <input
            id="toggler"
            type="checkbox"
            checked={value}
            ref={ref}
            onChange={onChange}
            readOnly
          />
          <span className="slider" />
          <span className="wave" />
        </div>
        <span className="value2">{value2}</span>
      </label>
    );
  }
}

export default Switcher;
