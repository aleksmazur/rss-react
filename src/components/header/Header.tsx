import { Component } from 'react';
import Nav from '../nav/Nav';
import logo from '../../assets/img/logo.webp';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img src={logo} alt="logo" className="logo__img" />
          <div>GreenPlant</div>
        </div>
        <Nav />
      </div>
    );
  }
}

export default Header;
