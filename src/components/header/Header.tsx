import React from 'react';
import Nav from '../nav/Nav';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>Logo</div>
        <Nav />
      </div>
    );
  }
}

export default Header;
