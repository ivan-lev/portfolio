import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default function Menu() {
  return (
    <menu className="menu__content">
      <li>
        <Link className="menu__link" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="menu__link" to="/about">
          About
        </Link>
      </li>

      <li>
        <Link className="menu__link" to="/contact">
          Contact
        </Link>
      </li>
    </menu>
  );
}
