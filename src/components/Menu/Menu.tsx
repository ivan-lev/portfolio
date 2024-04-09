/// <reference types="vite-plugin-svgr/client" />

import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import BurgerClosedIcon from '../../images/icon-burger-closed.svg?react';
import BurgerOpenedIcon from '../../images/icon-burger-opened.svg?react';

import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

export default function Menu() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);
  const [menuOpened, setMenuOpened] = useState(false);

  function openMenu() {
    setMenuOpened(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setMenuOpened(false);
    document.body.style.overflow = '';
  }

  return (
    <menu className="menu__content">
      {menuOpened ? (
        <BurgerOpenedIcon className="menu__burger" onClick={!menuOpened ? openMenu : closeMenu} />
      ) : (
        <BurgerClosedIcon className="menu__burger" onClick={!menuOpened ? openMenu : closeMenu} />
      )}
      <ul className={`menu__elements ${menuOpened ? 'menu__elements_showed' : ''}`}>
        <li className="menu__element">
          <Link className="menu__link" to="/" onClick={closeMenu}>
            {TRANSLATION?.MENU.HOME[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/about" onClick={closeMenu}>
            {TRANSLATION?.MENU.ABOUT[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/uses" onClick={closeMenu}>
            {TRANSLATION?.MENU.USES[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/contact" onClick={closeMenu}>
            {TRANSLATION?.MENU.CONTACT[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/credits" onClick={closeMenu}>
            {TRANSLATION?.MENU.CREDITS[LANG]}
          </Link>
        </li>
      </ul>
    </menu>
  );
}
