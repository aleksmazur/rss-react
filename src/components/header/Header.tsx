import logo from '../../assets/img/logo.webp';
import { NavLink } from 'react-router-dom';
import Nav from '../nav/Nav';

const Header = (props: { title: string }) => {
  return (
    <div className="header">
      <NavLink to={'/'}>
        <div className="logo">
          <img src={logo} alt="logo" className="logo__img" />
          <div style={{ color: 'rgb(33 71 43)' }}>GreenPlant</div>
        </div>
      </NavLink>
      {props.title}
      <Nav />
    </div>
  );
};

export default Header;
