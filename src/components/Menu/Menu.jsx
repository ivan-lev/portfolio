import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

export default function Menu() {
  const language = useContext(LanguageContext);

  return (
    <menu className="menu__content">
      <li className="menu__element">
        <Link className="menu__link" to="/">
          {language.menuHome}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/about">
          {language.menuAbout}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/contact">
          {language.menuContact}
        </Link>
      </li>
      <li className="menu__element">
        <Link className="menu__link" to="/credits">
          {language.menuCredits}
        </Link>
      </li>
    </menu>
  );
}
