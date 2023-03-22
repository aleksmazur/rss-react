import React from 'react';
import { CardPropsType } from '../cardItem/CardItem';
import './form.css';

type TypeProps = {
  addCard: (card: CardPropsType) => void;
};

class FormItem extends React.Component<TypeProps, object> {
  titleRef = React.createRef<HTMLInputElement>();
  descrRef = React.createRef<HTMLTextAreaElement>();
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
  fileRef = React.createRef<HTMLInputElement>();

  handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    const { addCard } = this.props;
    e.preventDefault();
    const file = this.fileRef.current?.files?.[0];
    const card = {
      title: this.titleRef.current?.value,
      descr: this.descrRef.current?.value,
      size: this.sizeRef.current?.value,
      care: Object.entries({
        Bright: this.careBrightRef.current?.checked,
        Sun: this.careSunRef.current?.checked,
        Shade: this.careShadeRef.current?.checked,
        Sandy: this.careSandyRef.current?.checked,
        Soil: this.careSoilRef.current?.checked,
        WaterDaily: this.careWaterDailyRef.current?.checked,
        WaterWeekly: this.careWaterWeeklyRef.current?.checked,
      })
        .filter((el) => el[1] === true)
        .flat()
        .filter((el) => typeof el !== 'boolean'),
      place: this.placeIndoorRef.current?.checked
        ? this.placeIndoorRef.current?.value
        : this.placeOutdoorRef.current?.value,
      blooming: this.bloomingRef.current?.value,
      raiting: Number(this.raitingRef.current?.value),
      img: file ? URL.createObjectURL(file) : undefined,
    };
    addCard(card);
  };

  render() {
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type="text" placeholder="Add title" ref={this.titleRef} required />
          </label>
          <label>
            Description:
            <textarea placeholder="Add description" ref={this.descrRef} />
          </label>
          <label>
            Size:
            <select name="size" ref={this.sizeRef}>
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
                <input type="checkbox" className="form__checkbox" ref={this.careBrightRef} />
              </label>
              <label>
                Sun
                <input type="checkbox" className="form__checkbox" ref={this.careSunRef} />
              </label>
              <label>
                Shade
                <input type="checkbox" className="form__checkbox" ref={this.careShadeRef} />
              </label>
              <label>
                Soil
                <input type="checkbox" className="form__checkbox" ref={this.careSoilRef} />
              </label>
              <label>
                Sandy
                <input type="checkbox" className="form__checkbox" ref={this.careSandyRef} />
              </label>
              <label>
                Water Daily
                <input type="checkbox" className="form__checkbox" ref={this.careWaterDailyRef} />
              </label>
              <label>
                Water Weekly
                <input type="checkbox" className="form__checkbox" ref={this.careWaterWeeklyRef} />
              </label>
            </div>
          </div>
          <div className="switch">
            <p>Place:</p>
            <div className="form__radio-group">
              <label>
                Outdoor
                <input type="radio" name="place" value="Outdoor" ref={this.placeOutdoorRef} />
              </label>
              <label>
                Indoor
                <input type="radio" name="place" value="Indoor" ref={this.placeIndoorRef} />
              </label>
            </div>
          </div>
          <label>
            Blooming period:
            <input type="date" ref={this.bloomingRef} />
          </label>
          <label>
            Raiting:
            <select name="size" ref={this.raitingRef}>
              {[1, 2, 3, 4, 5].map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </label>
          <label>
            Image:
            <input type="file" accept="image/*" name="img" ref={this.fileRef} />
          </label>
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

export default FormItem;
