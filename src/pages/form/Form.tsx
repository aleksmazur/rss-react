import { useState } from 'react';
import Alert from '../../components/alert/Alert';
import FormCardItem from '../../components/formCardItem/CardItem';
import FormItem from '../../components/form/FormItem';
import { CardPropsType } from '../../types/types';
import './form.css';

const Form = () => {
  const [cards, addCards] = useState<CardPropsType[]>([]);
  const [success, setSuccess] = useState<boolean>(false);
  const addCard = (card: CardPropsType) => {
    addCards((prevState) => [...prevState, card]);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  };

  return (
    <>
      <FormItem addCard={(card: CardPropsType) => addCard(card)} />
      <Alert success={success} />
      <div className="card__list">
        {cards.map((item: CardPropsType, index: number) => {
          return <FormCardItem {...item} key={index} />;
        })}
      </div>
    </>
  );
};

export default Form;
