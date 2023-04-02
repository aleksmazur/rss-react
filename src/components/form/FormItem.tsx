import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs, TypePropsForm } from '../../types/types';
import './formItem.css';
import '../formBits/checkbox/checkbox.css';
import '../formBits/switcher/switcher.css';
import '../formBits/otherInputs/otherInput.css';

const FormItem = ({ addCard }: TypePropsForm) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    const card = {
      title: data.title,
      size: data.size,
      raiting: data.raiting,
      descr: data.descr,
      care: data.care,
      place: data.place,
      blooming: data.blooming,
      img: URL.createObjectURL(data.image[0]),
    };
    addCard(card);
    reset();
  };

  const careOptions = ['Bright', 'Sun', 'Shade', 'Sandy', 'Soil', 'WaterDaily', 'WaterWeekly'];

  return (
    <div>
      <h2 className="section__title">Add new Plant</h2>
      <form noValidate className="addPlant__form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input
            type="text"
            placeholder={`Add title`}
            {...register('title', {
              required: 'Please, enter title',
              minLength: {
                value: 3,
                message: 'It should contain minimum 3 characters',
              },
            })}
          />
          {errors?.title && <div className="error__message">{errors?.title.message}</div>}
        </label>
        <label>
          Description:
          <input type="text" placeholder={`Add description`} {...register('descr')} />
        </label>
        <label>
          Size:
          <select
            className="select"
            {...register('size', { required: 'Please, select plant size' })}
          >
            {[undefined, 'Mini', 'Medium', 'Maxi'].map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {errors?.size && <div className="error__message">{errors?.size.message}</div>}
        </label>
        <div>
          <div className="care__form-section">
            Care:
            {errors?.care && <div className="error__message">{errors?.care.message}</div>}
          </div>
          <div className="care__form-checkboxes">
            {careOptions.map((el: string, index: number) => {
              return (
                <label className="form__checkbox-wrapper" key={index}>
                  {el}
                  <input
                    type="checkbox"
                    className="form__checkbox"
                    value={el}
                    {...register('care', { required: 'Please, select plant care' })}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <div className="switch">
          <p>Place:</p>
          <div className="form__radio-group">
            <label>
              Outdoor
              <input
                type="radio"
                value="Outdoor"
                {...register('place', { required: 'Please, select place for plant' })}
              />
            </label>
            <label>
              Indoor
              <input
                type="radio"
                value="Indoor"
                {...register('place', { required: 'Please, select place for plant' })}
              />
            </label>
          </div>
          {errors?.place && <div className="error__message">{errors?.place.message}</div>}
        </div>
        <label>
          Blooming period:
          <input
            type="month"
            {...register('blooming', { required: 'Please, add blooming period' })}
          />
          {errors?.blooming && <div className="error__message">{errors?.blooming?.message}</div>}
        </label>
        <label>
          Raiting:
          <select
            className="select"
            {...register('raiting', { required: 'Please, add plantt raiting' })}
          >
            {[undefined, 1, 2, 3, 4, 5].map((option, index) => {
              return (
                <option key={index} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
          {errors?.raiting && <div className="error__message">{errors?.raiting.message}</div>}
        </label>
        <label>
          Image:
          <input
            type="file"
            accept={'image/*'}
            {...register('image', {
              required: 'Please, add image',
              validate: {
                acceptedFormat: (files: FileList | null) =>
                  (files &&
                    ['image/jpg', 'image/jpeg', 'image/png', 'image/webp'].includes(
                      files[0].type
                    )) ||
                  'Please, add image format file',
              },
            })}
          />
          {errors?.image && <div className="error__message">{errors?.image.message}</div>}
        </label>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
};

export default FormItem;
