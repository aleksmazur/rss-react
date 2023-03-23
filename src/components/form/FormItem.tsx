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

type TypeState = {
  title: boolean;
  descr: boolean;
  size: boolean;
  place: boolean;
  blooming: boolean;
  raiting: boolean;
  image: boolean;
  showErrors: boolean;
};

class FormItem extends React.Component<TypeProps, TypeState> {
  constructor(props: TypeProps) {
    super(props);
    this.state = {
      title: false,
      descr: true,
      size: true,
      place: true,
      blooming: false,
      raiting: true,
      image: false,
      showErrors: false,
    };
  }

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

  validateTitle(): boolean {
    if (this.titleRef.current?.value && this.titleRef.current?.value.length > 3) {
      this.setState(() => ({
        title: true,
      }));
      return true;
    } else {
      this.setState(() => ({
        title: false,
      }));
      return false;
    }
  }

  validateBlooming(): boolean {
    console.log(this.bloomingRef.current?.value);
    if (this.bloomingRef.current?.value) {
      this.setState(() => ({
        blooming: true,
      }));
      return true;
    } else {
      this.setState(() => ({
        blooming: false,
      }));
      return false;
    }
  }

  validateImage(): boolean {
    if (this.fileRef.current?.files && this.fileRef.current?.files?.length > 0) {
      this.setState(() => ({
        image: true,
      }));
      return true;
    } else {
      this.setState(() => ({
        image: false,
      }));
      return false;
    }
  }

  allValidate(): boolean {
    const image = this.validateImage();
    const blooming = this.validateBlooming();
    const title = this.validateTitle();
    return image && blooming && title === true ? true : false;
  }

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
    if (this.allValidate()) {
      addCard(card);
      e.target.reset();
      this.setState(() => ({
        title: false,
        descr: true,
        size: false,
        place: false,
        blooming: false,
        raiting: false,
        image: false,
        showErrors: false,
      }));
    } else {
      this.setState(() => ({
        showErrors: true,
      }));
    }
    console.log(this.state);
  };

  render() {
    const { title, descr, size, blooming, image, showErrors } = this.state;
    return (
      <div>
        <h2 className="section__title">Add new Plant</h2>
        <form noValidate className="addPlant__form" onSubmit={this.handleSubmit}>
          <OtherInput
            label={'Title:'}
            type={'text'}
            placeholder={'Add title'}
            required={true}
            inputRef={this.titleRef}
            isValid={title}
            showErrors={showErrors}
            error={'Min 3'}
          />
          <OtherInput
            label={'Description:'}
            type={'text'}
            placeholder={'Add description'}
            required={false}
            inputRef={this.descrRef}
            isValid={descr}
            showErrors={showErrors}
            error={'Min 3'}
          />
          <Select label={'Size:'} options={['Mini', 'Medium', 'Maxi']} inputRef={this.sizeRef} />
          <div>
            Care:
            {this.careOptions.map(
              (el: { label: string; ref: React.Ref<HTMLInputElement> }, index: number) => {
                return <Checkbox label={el.label} inputRef={el.ref} key={index} />;
              }
            )}
          </div>
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
            isValid={blooming}
            showErrors={showErrors}
            error={'No period'}
          />
          <Select label={'Raiting:'} options={[1, 2, 3, 4, 5]} inputRef={this.raitingRef} />
          <OtherInput
            label={'Image:'}
            type={'file'}
            placeholder={''}
            required={false}
            inputRef={this.fileRef}
            isValid={image}
            showErrors={showErrors}
            error={'No image'}
          />
          <button type="submit">Add Plant</button>
        </form>
      </div>
    );
  }
}

export default FormItem;
