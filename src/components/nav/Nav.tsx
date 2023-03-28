import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav__ul">
        <li className="nav__li">
          <NavLink to={'/'}>Main</NavLink>
        </li>
        <li className="nav__li">
          <NavLink to={'/form'}>Form</NavLink>
        </li>
        <li className="nav__li">
          <NavLink to={'/about'}>About</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
