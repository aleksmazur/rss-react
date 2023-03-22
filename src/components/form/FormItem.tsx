import React from 'react';
import { CardPropsType } from '../cardItem/CardItem';
import Checkbox from '../formBits/checkbox/Checkbox';
import OtherInput from '../formBits/otherInputs/OtherInput';
import Select from '../formBits/select/Select';
import Switcher from '../formBits/switcher/Switcher';
import './form.css';

type TypeProps = {
  addCard: (card: CardPropsType) => void;
};

class FormItem extends React.Component<TypeProps, object> {
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
  fileRef = React.createRef<HTMLInputElement>();

  careOptions = [
    { label: 'Bright', ref: this.careBrightRef },
    { label: 'Sun', ref: this.careSunRef },
    { label: 'Shade', ref: this.careShadeRef },
    { label: 'Sandy', ref: this.careSandyRef },
    { label: 'Soil', ref: this.careSoilRef },
    { label: 'WaterDaily', ref: this.careWaterDailyRef },
    { label: 'WaterWeekly', ref: this.careWaterWeeklyRef },
  ];

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
      place: this.placeOutdoorRef.current?.checked
        ? this.placeOutdoorRef.current?.value
        : this.placeIndoorRef.current?.checked
        ? this.placeIndoorRef.current?.value
        : undefined,
      blooming: this.bloomingRef.current?.value,
      raiting: Number(this.raitingRef.current?.value),
      img: file ? URL.createObjectURL(file) : undefined,
    };
    console.log(card);
    addCard(card);
    e.target.reset();
  };

  render() {
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form className="addPlant__form" onSubmit={this.handleSubmit}>
          <OtherInput
            label={'Title:'}
            type={'text'}
            placeholder={'Add title'}
            required={true}
            inputRef={this.titleRef}
          />
          <OtherInput
            label={'Description:'}
            type={'text'}
            placeholder={'Add description'}
            required={false}
            inputRef={this.descrRef}
          />
          <Select label={'Size:'} options={['Mini', 'Medium', 'Maxi']} inputRef={this.sizeRef} />
          {this.careOptions.map(
            (el: { label: string; ref: React.Ref<HTMLInputElement> }, index: number) => {
              return <Checkbox label={el.label} inputRef={el.ref} key={index} />;
            }
          )}
          <Switcher
            value1={'Outdoor'}
            value2={'Indoor'}
            label={'Place:'}
            name={'place'}
            inputRef1={this.placeOutdoorRef}
            inputRef2={this.placeIndoorRef}
          />
          <OtherInput
            label={'Blooming period:'}
            type={'month'}
            placeholder={''}
            required={false}
            inputRef={this.bloomingRef}
          />
          <Select label={'Raiting:'} options={[1, 2, 3, 4, 5]} inputRef={this.raitingRef} />
          <OtherInput
            label={'Image:'}
            type={'file'}
            placeholder={''}
            required={false}
            inputRef={this.fileRef}
          />
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

export default FormItem;
