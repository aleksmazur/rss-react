import { RoutePropsType } from '../../types/types';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const PageWrapper = ({ title, component }: RoutePropsType) => {
  return (
    <>
      <Header title={title} />
      <div className="content">{component}</div>
      <Footer />
    </>
  );
};

export default PageWrapper;
