import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import BurgerClosedIcon from '../../images/icon-burger-closed.svg?react';
import BurgerOpenedIcon from '../../images/icon-burger-opened.svg?react';

import { TranslationContext } from '../../contexts/translationContext.js';

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false);

  function handleMenuOpen() {
    setMenuOpened(!menuOpened);
  }

  const translation = useContext(TranslationContext);

  return (
    <menu className="menu__content">
      {menuOpened ? (
        <BurgerOpenedIcon className="menu__burger" onClick={handleMenuOpen} />
      ) : (
        <BurgerClosedIcon className="menu__burger" onClick={handleMenuOpen} />
      )}
      <ul className={`menu__elements ${menuOpened ? 'menu__elements_showed' : ''}`}>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/" onClick={handleMenuOpen}>
            {translation?.menuHome}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/about" onClick={handleMenuOpen}>
            {translation?.menuAbout}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/contact" onClick={handleMenuOpen}>
            {translation?.menuContact}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/credits" onClick={handleMenuOpen}>
            {translation?.menuCredits}
          </Link>
        </li>
      </ul>
    </menu>
  );
}
