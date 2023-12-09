import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Credits.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

import logo from '../../images/favicon.png';
import telegramIcon from '../../images/icon-social-telegram.svg';

export default function Credits() {
  const translation = useContext(LanguageContext);

  return (
    <section className="credits">
      <ul className="credits__list">
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsSite}</span>
          <Link
            className="credits__link"
            to="https://www.figma.com/file/WrsiAQStgOWMzBWLzPHDAi/Developer-Portfolio-Design-(Community)?type=design&t=hRTNcG4J9JY8YIR6-6"
          >
            Figma
          </Link>
        </li>
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsLogo}</span>
          <Link className="credits__link" to="https://www.flaticon.com/free-icon/coding_1159385">
            Flaticon.com
          </Link>
          <img className="credits__image" src={logo}></img>
        </li>
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsTelegramLogo}</span>
          <Link
            className="credits__link"
            to="https://icons8.com/icon/QP6ADhc43z2T/telegram#:~:text=look%20like%20this%3A-,Telegram,-icon%20by%20Icons8"
          >
            Freepik.com
          </Link>
          <img className="credits__image" src={telegramIcon}></img>
        </li>
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsVitePlugin}</span>
          <Link className="credits__link" to="https://www.npmjs.com/package/vite-plugin-svgr">
            vite-plugin-svgr
          </Link>
        </li>
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsSunMoonIcons}</span>
          <Link
            className="credits__link"
            to="https://www.svgrepo.com/collection/solar-outline-icons/"
          >
            Solar Outline Icons
          </Link>
        </li>
        <li className="credits__list-element">
          <span className="credits__text">{translation.creditsCssCustomProps}</span>
          <Link
            className="credits__link"
            to="https://tproger.ru/articles/custom-properties-in-css-part-1"
          >
            Tproger
          </Link>
        </li>
      </ul>
    </section>
  );
}
