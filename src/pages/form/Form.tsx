import React, { Component } from 'react';
import CardItem, { CardPropsType } from '../../components/cardItem/CardItem';
import FileInput from '../../components/formBits/fileInput/FileInput';
import './form.css';

class Form extends Component {
  state = {
    title: '',
    descr: '',
    size: '',
    care: {
      Bright: false,
      Sun: false,
      Shade: false,
      Sandy: false,
      Soil: false,
      WaterDaily: false,
      WaterWeekly: false,
    },
    place: '',
    blooming: '',
    raiting: 5,
    showData: [],
  };

  titleRef = React.createRef<HTMLInputElement>();
  descrRef = React.createRef<HTMLInputElement>();
  bloomingRef = React.createRef<HTMLInputElement>();
  sizeRef = React.createRef<HTMLSelectElement>();
  careBrightRef = React.createRef<HTMLInputElement>();
  careSunRef = React.createRef<HTMLInputElement>();
  careShadeRef = React.createRef<HTMLInputElement>();
  careSandyRef = React.createRef<HTMLInputElement>();
  careSoilRef = React.createRef<HTMLInputElement>();
  careWaterDailyRef = React.createRef<HTMLInputElement>();
  careWaterWeeklyRef = React.createRef<HTMLInputElement>();
  raitingRef = React.createRef<HTMLSelectElement>();
  placeIndoorRef = React.createRef<HTMLInputElement>();
  placeOutdoorRef = React.createRef<HTMLInputElement>();

  handleChange = () => {
    this.setState({
      title: this.titleRef.current?.value,
      descr: this.descrRef.current?.value,
      size: this.sizeRef.current?.value,
      care: {
        Bright: this.careBrightRef.current?.checked,
        Sun: this.careSunRef.current?.checked,
        Shade: this.careShadeRef.current?.checked,
        Sandy: this.careSandyRef.current?.checked,
        Soil: this.careSoilRef.current?.checked,
        WaterDaily: this.careWaterDailyRef.current?.checked,
        WaterWeekly: this.careWaterWeeklyRef.current?.checked,
      },
      place: this.placeIndoorRef.current?.checked
        ? this.placeIndoorRef.current?.value
        : this.placeOutdoorRef.current?.value,
      blooming: this.bloomingRef.current?.value,
      raiting: this.raitingRef.current?.value,
    });
    console.log(this.state);
  };

  handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(this.state, 'card add');
    const { title, descr, size, care, place, blooming, raiting } = this.state;
    this.setState({
      title: '',
      descr: '',
      size: '',
      care: {
        Bright: false,
        Sun: false,
        Shade: false,
        Sandy: false,
        Soil: false,
        WaterDaily: false,
        WaterWeekly: false,
      },
      place: '',
      blooming: '',
      raiting: 5,
      showData: [
        ...this.state.showData,
        ...[
          {
            title: title,
            descr: descr,
            size: size,
            care: Object.entries(care)
              .filter((el) => el[1] === true)
              .flat()
              .filter((el) => typeof el !== 'boolean'),
            place: place,
            blooming: blooming,
            raiting: raiting,
          },
        ],
      ],
    });
  };

  render() {
    const { title, descr, size, care, blooming, raiting } = this.state;
    const { Bright, Sun, Shade, Sandy, Soil, WaterDaily, WaterWeekly } = care;
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              placeholder="Add title"
              value={title}
              ref={this.titleRef}
              onChange={this.handleChange}
              required
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              placeholder="Add description"
              value={descr}
              ref={this.descrRef}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Size:
            <select name="size" value={size} ref={this.sizeRef} onChange={this.handleChange}>
              {['Mini', 'Medium', 'Maxi'].map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
          <div className="form__section-care">
            <p>Care:</p>
            <div className="form__checkbox-group">
              <label>
                Bright
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={Bright}
                  ref={this.careBrightRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Sun
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={Sun}
                  ref={this.careSunRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Shade
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={Shade}
                  ref={this.careShadeRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Soil
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={Soil}
                  ref={this.careSoilRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Sandy
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={Sandy}
                  ref={this.careSandyRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Water Daily
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={WaterDaily}
                  ref={this.careWaterDailyRef}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                Water Weekly
                <input
                  type="checkbox"
                  className="form__checkbox"
                  checked={WaterWeekly}
                  ref={this.careWaterWeeklyRef}
                  onChange={this.handleChange}
                />
              </label>
            </div>
          </div>
          {/* <label className="switch">
            Place:
            <span className="value1">Outdoor</span>
            <div className="switcher">
              <input
                id="toggler"
                type="radio"
                value={place}
                ref={this.placeRef}
                onChange={this.handleChange}
                readOnly
              />
              <span className="slider" />
              <span className="wave" />
            </div>
            <span className="value2">Indoor</span>
          </label> */}
          <label className="switch">
            Place:
            <label>
              Outdoor
              <input
                type="radio"
                name="place"
                value="Outdoor"
                ref={this.placeOutdoorRef}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Indoor
              <input
                type="radio"
                name="place"
                value="Indoor"
                ref={this.placeIndoorRef}
                onChange={this.handleChange}
              />
            </label>
          </label>
          <label>
            Blooming period:
            <input
              type="date"
              value={blooming}
              ref={this.bloomingRef}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Raiting:
            <select name="size" value={raiting} ref={this.raitingRef} onChange={this.handleChange}>
              {[1, 2, 3, 4, 5].map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
          <FileInput label="Image:" />
          <button type="submit">Add Plant</button>
        </form>
        <div className="card__list">
          {this.state.showData.map((item: CardPropsType, index) => {
            console.log(item);
            return <CardItem {...item} key={index} />;
          })}
        </div>
      </div>
    );
  }
}

export default Form;
