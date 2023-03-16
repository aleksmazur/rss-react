import { Component } from 'react';
import Checkbox from '../../components/formBits/checkbox/Checkbox';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form">
          <label>
            Title:
            <input type="text" placeholder="Add title" required />
          </label>
          <label>
            Description:
            <textarea placeholder="Add description" />
          </label>
          <label>
            Size:
            <select name="size">
              <option value="mini">Mini</option>
              <option value="medium">Medium</option>
              <option value="maxi">Maxi</option>
            </select>
          </label>
          <div className="form__section-care">
            <p>Care:</p>
            <div className="form__checkbox-group">
              <Checkbox label="Bright" value={true} />
              <Checkbox label="Indirect Sunlight" value={true} />
              <Checkbox label="Partial Sun" value={true} />
              <Checkbox label="Partial Shade" value={false} />
              <Checkbox label="Sandy Soil" value={false} />
              <Checkbox label="Moist Soil" value={false} />
              <Checkbox label="Water Twice a Week" value={false} />
              <Checkbox label="Water Weekly" value={false} />
            </div>
          </div>
          <label>
            Place:
            <span className="slider">Indoor</span>
            <input type="checkbox" />
            <span className="slider">Outdoor</span>
          </label>
          <label>
            Blooming period:
            <input type="date" placeholder="Blooming period" />
          </label>
          <label>
            Raiting:
            <select name="raiting">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </label>
          <label>
            Upload Image:
            <input type="file"></input>
          </label>
          <button>Add Plant</button>
        </form>
      </div>
    );
  }
}

export default Form;
