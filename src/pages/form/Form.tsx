import React, { Component } from 'react';
import Checkbox from '../../components/formBits/checkbox/Checkbox';
import FileInput from '../../components/formBits/fileInput/FileInput';
import OtherInput from '../../components/formBits/otherInputs/OtherInput';
import Select from '../../components/formBits/select/Select';
import Switcher from '../../components/formBits/switcher/Switcher';
import './form.css';

class Form extends Component {
  state = {
    title: '',
    descr: '',
    size: '',
    care: {
      bright: false,
      sunlight: false,
      sun: false,
      shade: false,
      sandy: false,
      soil: false,
      waterTtwice: false,
      waterWeekly: false,
    },
    place: false,
    blooming: '',
    raiting: 5,
  };

  titleRef = React.createRef<HTMLInputElement>();
  descrRef = React.createRef<HTMLInputElement>();
  bloomingRef = React.createRef<HTMLInputElement>();
  sizeRef = React.createRef<HTMLSelectElement>();
  careRef = React.createRef<HTMLInputElement>();
  raitingRef = React.createRef<HTMLSelectElement>();
  placeRef = React.createRef<HTMLInputElement>();

  handleTitleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const title = e.target as HTMLInputElement;
    this.setState({
      title: title.value,
    });
  };

  handleDescrChange = (e: React.FormEvent<HTMLInputElement>) => {
    const descr = e.target as HTMLInputElement;
    this.setState({
      descr: descr.value,
    });
  };

  handleBloomingChange = (e: React.FormEvent<HTMLInputElement>) => {
    const blooming = e.target as HTMLInputElement;
    this.setState({
      blooming: blooming.value,
    });
  };

  handleSizeChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const size = e.target as HTMLSelectElement;
    this.setState({
      size: size.value,
    });
  };

  handleRaitingChange = (e: React.FormEvent<HTMLSelectElement>) => {
    const raiting = e.target as HTMLSelectElement;
    this.setState({
      raiting: raiting.value,
    });
  };

  handleCareChange = () => {
    this.setState({
      care: { ...this.state.care, soil: !this.state.care.soil },
    });
  };

  handlePlaceChange = () => {
    this.setState({
      place: !this.state.place,
    });
  };

  handleChange = () => {
    this.setState({
      title: this.titleRef.current?.value,
      descr: this.descrRef.current?.value,
      size: this.sizeRef.current?.value,
      care: {
        bright: false,
        sunlight: false,
        sun: false,
        shade: false,
        sandy: false,
        soil: false,
        waterTtwice: false,
        waterWeekly: false,
      },
      place: this.placeRef.current?.value,
      blooming: this.bloomingRef.current?.value,
      raiting: this.raitingRef.current?.value,
    });
  };

  render() {
    const { title, descr, size, care, place, blooming, raiting } = this.state;
    const { bright, sunlight, sun, shade, sandy, soil, waterTtwice, waterWeekly } = care;
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form">
          <OtherInput
            label="Title:"
            type="text"
            placeholder="Add title"
            value={title}
            ref={this.titleRef}
            onChange={this.handleTitleChange}
          />
          <OtherInput
            label="Description:"
            type="text"
            placeholder="Add description"
            value={descr}
            ref={this.descrRef}
            onChange={this.handleDescrChange}
          />
          <Select
            label="Size:"
            name="size"
            options={['Mini', 'Medium', 'Maxi']}
            value={size}
            ref={this.sizeRef}
            onChange={this.handleSizeChange}
          />
          <div className="form__section-care">
            <p>Care:</p>
            <div className="form__checkbox-group">
              <Checkbox label="Bright" value={bright} onChange={this.handleCareChange} />
              <Checkbox
                label="Indirect Sunlight"
                value={sunlight}
                onChange={this.handleCareChange}
              />
              <Checkbox label="Partial Sun" value={sun} onChange={this.handleCareChange} />
              <Checkbox label="Partial Shade" value={shade} onChange={this.handleCareChange} />
              <Checkbox label="Sandy Soil" value={sandy} onChange={this.handleCareChange} />
              <Checkbox label="Moist Soil" value={soil} onChange={this.handleCareChange} />
              <Checkbox
                label="Water Twice a Week"
                value={waterTtwice}
                onChange={this.handleCareChange}
              />
              <Checkbox label="Water Weekly" value={waterWeekly} onChange={this.handleCareChange} />
            </div>
          </div>
          <Switcher
            label="Place: "
            value1="Outdoor"
            value2="Indoor"
            value={place}
            ref={this.placeRef}
            onChange={this.handlePlaceChange}
          />
          <OtherInput
            label="Blooming period:"
            type="date"
            placeholder="Blooming period"
            value={blooming}
            ref={this.bloomingRef}
            onChange={this.handleBloomingChange}
          />
          <Select
            label="Raiting:"
            name="raiting"
            options={[1, 2, 3, 4, 5]}
            value={raiting}
            ref={this.raitingRef}
            onChange={this.handleRaitingChange}
          />
          <FileInput label="Image:" />
          <button>Add Plant</button>
        </form>
      </div>
    );
  }
}

export default Form;
