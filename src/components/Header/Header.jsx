import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import Menu from '../Menu/Menu.jsx';
import logo from '../../images/favicon.png';
import iconGithub from '../../images/icon-social-github.svg';
import iconLinkedIn from '../../images/icon-social-linkedin.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo}></img>
      </Link>
      <div className="header__content">
        <Menu />
        <li>
          <Link to="#">
            <img className="header__social-logo" src={iconGithub}></img>
          </Link>
        </li>
        <li>
          <Link to="#">
            <img className="header__social-logo" src={iconLinkedIn}></img>
          </Link>
        </li>
      </div>
    </header>
  );
}

export default Header;
