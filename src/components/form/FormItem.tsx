import React, { useState } from 'react';
import { CardPropsType, TypePropsForm, TypeStateForm } from '../../types/types';
import Checkbox from '../formBits/checkbox/Checkbox';
import OtherInput from '../formBits/otherInputs/OtherInput';
import Select from '../formBits/select/Select';
import Switcher from '../formBits/switcher/Switcher';
import './formItem.css';

const FormItem = ({ addCard }: TypePropsForm) => {
  const titleRef = React.createRef<HTMLInputElement>();
  const descrRef = React.createRef<HTMLInputElement>();
  const bloomingRef = React.createRef<HTMLInputElement>();
  const sizeRef = React.createRef<HTMLSelectElement>();
  const careBrightRef = React.createRef<HTMLInputElement>();
  const careSunRef = React.createRef<HTMLInputElement>();
  const careShadeRef = React.createRef<HTMLInputElement>();
  const careSandyRef = React.createRef<HTMLInputElement>();
  const careSoilRef = React.createRef<HTMLInputElement>();
  const careWaterDailyRef = React.createRef<HTMLInputElement>();
  const careWaterWeeklyRef = React.createRef<HTMLInputElement>();
  const raitingRef = React.createRef<HTMLSelectElement>();
  const placeIndoorRef = React.createRef<HTMLInputElement>();
  const placeOutdoorRef = React.createRef<HTMLInputElement>();
  const fileRef = React.createRef<HTMLInputElement>();

  const [cardData, setCardData] = useState<TypeStateForm>({
    title: false,
    descr: true,
    size: false,
    place: false,
    blooming: false,
    care: false,
    raiting: false,
    image: false,
    showErrors: false,
  });

  const careOptions = [
    { label: 'Bright', ref: careBrightRef },
    { label: 'Sun', ref: careSunRef },
    { label: 'Shade', ref: careShadeRef },
    { label: 'Sandy', ref: careSandyRef },
    { label: 'Soil', ref: careSoilRef },
    { label: 'WaterDaily', ref: careWaterDailyRef },
    { label: 'WaterWeekly', ref: careWaterWeeklyRef },
  ];

  const allValidate = (): boolean => {
    const corTitle = !!(titleRef.current?.value && titleRef.current?.value.length > 3);
    const corBlooming = !!bloomingRef.current?.value;
    const corImage = !!(
      fileRef.current?.files?.[0] && fileRef.current?.files[0].type.includes('image')
    );
    const corSize = !!sizeRef.current?.value;
    const corRaiting = !!(raitingRef.current?.value && Number(raitingRef.current?.value) > 0);
    const corPlace = !!(placeOutdoorRef.current?.checked || placeIndoorRef.current?.checked);
    const corCare = !!(
      careBrightRef.current?.checked ||
      careSunRef.current?.checked ||
      careShadeRef.current?.checked ||
      careSandyRef.current?.checked ||
      careSoilRef.current?.checked ||
      careWaterDailyRef.current?.checked ||
      careWaterWeeklyRef.current?.checked
    );
    setCardData({
      title: corTitle,
      descr: true,
      size: corSize,
      place: corPlace,
      care: corCare,
      blooming: corBlooming,
      raiting: corRaiting,
      image: corImage,
      showErrors: false,
    });
    return corTitle && corImage && corBlooming && corSize && corCare && corRaiting && corPlace;
  };

  const createCard = (): CardPropsType => {
    const file = fileRef.current?.files?.[0];
    console.log(bloomingRef.current?.value);
    const card = {
      title: titleRef.current?.value,
      descr: descrRef.current?.value,
      size: sizeRef.current?.value,
      care: Object.entries({
        Bright: careBrightRef.current?.checked,
        Sun: careSunRef.current?.checked,
        Shade: careShadeRef.current?.checked,
        Sandy: careSandyRef.current?.checked,
        Soil: careSoilRef.current?.checked,
        WaterDaily: careWaterDailyRef.current?.checked,
        WaterWeekly: careWaterWeeklyRef.current?.checked,
      })
        .filter((el) => el[1] === true)
        .flat()
        .filter((el) => typeof el !== 'boolean'),
      place: placeOutdoorRef.current?.checked
        ? placeOutdoorRef.current?.value
        : placeIndoorRef.current?.checked
        ? placeIndoorRef.current?.value
        : undefined,
      blooming: bloomingRef.current?.value,
      raiting: Number(raitingRef.current?.value),
      img: file ? URL.createObjectURL(file) : undefined,
    };
    return card;
  };

  const handleSubmit: React.ChangeEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (allValidate()) {
      const card: CardPropsType = createCard();
      addCard(card);
      e.target.reset();
    } else {
      setCardData((cardData) => ({
        ...cardData,
        showErrors: true,
      }));
    }
  };

  const { title, descr, size, raiting, blooming, care, place, image, showErrors } = cardData;

  return (
    <div>
      <h2 className="section__title">Add new Plant</h2>
      <form noValidate className="addPlant__form" onSubmit={handleSubmit}>
        <OtherInput
          label={'Title'}
          type={'text'}
          inputRef={titleRef}
          isValid={title}
          showErrors={showErrors}
          error={'It should contain minimum 3 characters'}
        />
        <OtherInput
          label={'Description'}
          type={'text'}
          inputRef={descrRef}
          isValid={descr}
          showErrors={showErrors}
          error={''}
        />
        <Select
          label={'Size:'}
          options={[undefined, 'Mini', 'Medium', 'Maxi']}
          inputRef={sizeRef}
          isValid={size}
          showErrors={showErrors}
          error={'Please, select plant size'}
        />
        <div>
          <div className="care__form-section">
            Care:
            {!care && showErrors && <div className="error__message">Please, select plant care</div>}
          </div>
          <div className="care__form-checkboxes">
            {careOptions.map(
              (el: { label: string; ref: React.Ref<HTMLInputElement> }, index: number) => {
                return <Checkbox label={el.label} inputRef={el.ref} key={index} />;
              }
            )}
          </div>
        </div>
        <Switcher
          value1={'Outdoor'}
          value2={'Indoor'}
          label={'Place:'}
          name={'place'}
          inputRef1={placeOutdoorRef}
          inputRef2={placeIndoorRef}
          isValid={place}
          showErrors={showErrors}
          error={'Please, select place for plant'}
        />
        <OtherInput
          label={'Blooming period'}
          type={'month'}
          inputRef={bloomingRef}
          isValid={blooming}
          showErrors={showErrors}
          error={'Please, select plant blooming period'}
        />
        <Select
          label={'Raiting:'}
          options={[undefined, 1, 2, 3, 4, 5]}
          inputRef={raitingRef}
          isValid={raiting}
          showErrors={showErrors}
          error={'Please, add plantt raiting'}
        />
        <OtherInput
          label={'Image'}
          type={'file'}
          inputRef={fileRef}
          isValid={image}
          showErrors={showErrors}
          error={'No image available'}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default FormItem;
