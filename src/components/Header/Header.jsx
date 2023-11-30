import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import Menu from '../Menu/Menu.jsx';
import SocialLinks from '../SocialIcons/SocialLinks.jsx';

import logo from '../../images/favicon.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo}></img>
      </Link>
      <div className="header__content">
        <Menu />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
