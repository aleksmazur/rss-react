import { Component } from 'react';
import './fileInput.css';

type PropsType = {
  label: string;
};

class FileInput extends Component<PropsType> {
  render() {
    const { label } = this.props;
    return (
      <div>
        <label htmlFor="ing" className="add__file">
          {label}
          <div className="add__file-button-text">Upload</div>
        </label>
        <input id="img" type="file" className="add__file-input" />
      </div>
    );
  }
}

export default FileInput;
