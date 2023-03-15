import { Component } from 'react';
import Footer from '../footer/Footer';
import Header from '../header/Header';

type RoutePropsType = {
  path: string;
  title: string;
  component: JSX.Element;
};

class PageWrapper extends Component<{ content: RoutePropsType }> {
  render() {
    const { title, component } = this.props.content;
    return (
      <>
        <Header title={title} />
        <div className="content">{component}</div>
        <Footer />
      </>
    );
  }
}

export default PageWrapper;
