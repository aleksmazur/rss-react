import { useEffect, useState } from 'react';
import Alert from '../../components/alert/Alert';
import FormCardItem from '../../components/formCardItem/CardItem';
import FormItem from '../../components/form/FormItem';
import { CardPropsType } from '../../types/types';
import './form.css';
import { useAppSelector } from '../../hooks/selectors';

const Form = () => {
  const [success, setSuccess] = useState<boolean>(false);
  const { cards } = useAppSelector((state) => state.form);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, [cards]);

  return (
    <>
      <FormItem setSuccess={setSuccess} />
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
