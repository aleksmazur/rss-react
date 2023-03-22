import React from 'react';
import CardItem, { CardPropsType } from '../../components/cardItem/CardItem';
import FormItem from '../../components/form/FormItem';
import './form.css';

type FormState = {
  cards: CardPropsType[];
};

class Form extends React.Component<object, FormState> {
  constructor(props: object) {
    super(props);
    this.state = { cards: [] };
  }
  addCard(card: CardPropsType) {
    this.setState((prevState: FormState) => ({
      cards: [...prevState.cards, card],
    }));
  }
  render() {
    return (
      <>
        <FormItem addCard={(card: CardPropsType) => this.addCard(card)} />
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
