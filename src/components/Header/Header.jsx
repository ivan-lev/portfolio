import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/favicon.png';
import iconGithub from '../../images/icon-social-github.svg';
import iconLinkedIn from '../../images/icon-social-linkedin.svg';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logo}></img>
      </Link>
      <menu className="header__content">
        <li>
          <Link className="header__link" to="#">
            Home
          </Link>
        </li>
        <li>
          <Link className="header__link" to="#">
            About
          </Link>
        </li>
        <li>
          <Link className="header__link" to="#">
            Tech Stack
          </Link>
        </li>
        <li>
          <Link className="header__link" to="#">
            Projects
          </Link>
        </li>
        <li>
          <Link className="header__link" to="#">
            Contact
          </Link>
        </li>
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
      </menu>
    </header>
  );
}

export default Header;
