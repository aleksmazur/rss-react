import { Component } from 'react';
import Checkbox from '../../components/formBits/checkbox/Checkbox';
import FileInput from '../../components/formBits/fileInput/FileInput';
import OtherInput from '../../components/formBits/otherInputs/OtherInput';
import Select from '../../components/formBits/select/Select';
import Switcher from '../../components/formBits/switcher/Switcher';
import './form.css';

class Form extends Component {
  render() {
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form">
          <OtherInput label="Title:" type="text" placeholder="Add title" />
          <OtherInput label="Description:" type="text" placeholder="Add description" />
          <Select label="Size:" name="size" options={['Mini', 'Medium', 'Maxi']} />
          <div className="form__section-care">
            <p>Care:</p>
            <div className="form__checkbox-group">
              <Checkbox label="Bright" value={true} />
              <Checkbox label="Indirect Sunlight" value={true} />
              <Checkbox label="Partial Sun" value={false} />
              <Checkbox label="Partial Shade" value={false} />
              <Checkbox label="Sandy Soil" value={false} />
              <Checkbox label="Moist Soil" value={true} />
              <Checkbox label="Water Twice a Week" value={false} />
              <Checkbox label="Water Weekly" value={false} />
            </div>
          </div>
          <Switcher label="Place: " value1="Outdoor" value2="Indoor" />
          <OtherInput label="Blooming period:" type="date" placeholder="Blooming period" />
          <Select label="Raiting:" name="raiting" options={['1', '2', '3', '4', '5']} />
          <FileInput label="Image:" />
          <button>Add Plant</button>
        </form>
      </div>
    );
  }
}

export default Form;
