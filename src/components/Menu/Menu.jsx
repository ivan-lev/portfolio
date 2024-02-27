import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import BurgerClosedIcon from '../../images/icon-burger-closed.svg?react';
import BurgerOpenedIcon from '../../images/icon-burger-opened.svg?react';

import { LanguageContext } from '../../contexts/languageContext.js';
import { TranslationContext } from '../../contexts/translationContext.js';

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
          <Link className="menu__link" to="/portfolio/" onClick={closeMenu}>
            {TRANSLATION?.MENU.HOME[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/about" onClick={closeMenu}>
            {TRANSLATION?.MENU.ABOUT[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/uses" onClick={closeMenu}>
            {TRANSLATION?.MENU.USES[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/contact" onClick={closeMenu}>
            {TRANSLATION?.MENU.CONTACT[LANG]}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/credits" onClick={closeMenu}>
            {TRANSLATION?.MENU.CREDITS[LANG]}
          </Link>
        </li>
      </ul>
    </menu>
  );
}
