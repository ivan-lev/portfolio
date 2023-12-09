import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

export default function Menu() {
  const translation = useContext(TranslationContext);

  return (
    <menu className="menu__content">
      <li className="menu__element">
        <Link className="menu__link" to="/">
          {translation?.menuHome}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/about">
          {translation?.menuAbout}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/contact">
          {translation?.menuContact}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/credits">
          {translation?.menuCredits}
        </Link>
      </li>
    </menu>
  );
}
