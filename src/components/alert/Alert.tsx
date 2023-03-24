import { Component } from 'react';
import './alert.css';

class Alert extends Component<{ success: boolean }, object> {
  render() {
    const { success } = this.props;
    return (
      <div className={success ? 'alert alert__success' : 'alert alert__error'}>
        <p>
          {success
            ? 'Plant added successfully to the PlantList'
            : 'Something went wrong. Please try again'}
        </p>
      </div>
    );
  }
}

export default Alert;
