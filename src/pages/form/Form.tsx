import React from 'react';
import Alert from '../../components/alert/Alert';
import CardItem, { CardPropsType } from '../../components/cardItem/CardItem';
import FormItem from '../../components/form/FormItem';
import './form.css';

type FormState = {
  cards: CardPropsType[];
  success: boolean;
};

class Form extends React.Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = { cards: [], success: false };
  }
  addCard(card: CardPropsType) {
    this.setState((prevState: FormState) => ({
      cards: [...prevState.cards, card],
      success: true,
    }));
    setTimeout(() => {
      this.setState(() => ({
        success: false,
      }));
    }, 2000);
  }

  render() {
    const { success } = this.state;
    return (
      <>
        <FormItem addCard={(card: CardPropsType) => this.addCard(card)} />
        <Alert success={success} />
        <div className="card__list">
          {this.state.cards.map((item: CardPropsType, index: number) => {
            return <CardItem {...item} key={index} />;
          })}
        </div>
      </>
    );
  }
}

export default Form;
