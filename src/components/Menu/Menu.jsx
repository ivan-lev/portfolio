import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

import BurgerClosedIcon from '../../images/icon-burger-closed.svg?react';
import BurgerOpenedIcon from '../../images/icon-burger-opened.svg?react';

import { TranslationContext } from '../../contexts/translationContext.js';

export default function Menu() {
  const [menuOpened, setMenuOpened] = useState(false);

  function openMenu() {
    setMenuOpened(true);
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    setMenuOpened(false);
    document.body.style.overflow = '';
  }

  const translation = useContext(TranslationContext);

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
            {translation?.menuHome}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/about" onClick={closeMenu}>
            {translation?.menuAbout}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/uses" onClick={closeMenu}>
            {translation?.menuUses}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/contact" onClick={closeMenu}>
            {translation?.menuContact}
          </Link>
        </li>
        <li className="menu__element">
          <Link className="menu__link" to="/portfolio/credits" onClick={closeMenu}>
            {translation?.menuCredits}
          </Link>
        </li>
      </ul>
    </menu>
  );
}
