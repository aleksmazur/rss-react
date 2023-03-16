import { Component } from 'react';
type PropsType = {
  value: boolean;
  label: string;
};

class Checkbox extends Component<PropsType> {
  render() {
    const { value, label } = this.props;
    return (
      <label>
        <input type="checkbox" checked={value} />
        {label}
      </label>
    );
  }
}

export default Checkbox;
