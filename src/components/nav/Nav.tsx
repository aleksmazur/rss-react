import { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul className="nav__ul">
          <li className="nav__li">
            <NavLink to={'/'}>Main</NavLink>
          </li>
          <li className="nav__li">
            <NavLink to={'about'}>About</NavLink>
          </li>
          <li className="nav__li">
            <NavLink to={'quiz'}>Quiz</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
