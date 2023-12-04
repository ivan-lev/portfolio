import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Credits.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

import logo from '../../images/favicon.png';
import telegramIcon from '../../images/icon-social-telegram.svg';

export default function Credits() {
  const language = useContext(LanguageContext);

  return (
    <section className="credits">
      <ul className="credits__list">
        <li className="credits__list-element">
          <span className="main__text">{language.creditsSite}&nbsp;</span>
          <Link
            className="credits__link"
            to="https://www.figma.com/file/WrsiAQStgOWMzBWLzPHDAi/Developer-Portfolio-Design-(Community)?type=design&t=hRTNcG4J9JY8YIR6-6"
          >
            Figma
          </Link>
        </li>
        <li className="credits__list-element">
          <span className="main__text">{language.creditsLogo}&nbsp;</span>
          <Link className="credits__link" to="https://www.flaticon.com/search?word=portfolio">
            Flaticon.com
          </Link>
          <img className="credits__image" src={logo}></img>
        </li>
        <li className="credits__list-element">
          <span className="main__text">{language.creditsTelegramLogo}&nbsp;</span>
          <Link
            className="credits__link"
            to="https://icons8.com/icon/QP6ADhc43z2T/telegram#:~:text=look%20like%20this%3A-,Telegram,-icon%20by%20Icons8"
          >
            Freepik.com
          </Link>
          <img className="credits__image" src={telegramIcon}></img>
        </li>
        <li className="credits__list-element">
          <span className="main__text">{language.creditsVitePlugin}&nbsp;</span>
          <Link className="credits__link" to="https://www.npmjs.com/package/vite-plugin-svgr">
            vite-plugin-svgr
          </Link>
        </li>
      </ul>
    </section>
  );
}
