import React from 'react';
import { Link } from 'react-router-dom';
import './Credits.scss';

import logo from '../../images/favicon.png';
import telegramIcon from '../../images/icon-social-telegram.svg';

export default function Credits() {
  return (
    <section>
      <ul className="credits__list">
        <li className="credits__list-element">
          <span className="main__text">This site was created using free&nbsp;</span>
          <Link
            className="credits__link"
            to="https://www.figma.com/file/WrsiAQStgOWMzBWLzPHDAi/Developer-Portfolio-Design-(Community)?type=design&t=hRTNcG4J9JY8YIR6-6"
          >
            template from Figma
          </Link>
        </li>
        <li className="credits__list-element">
          <span className="main__text">Logo was founded on&nbsp;</span>
          <Link className="credits__link" to="https://www.flaticon.com/search?word=portfolio">
            Flaticon.com
          </Link>
          <img className="credits__image" src={logo}></img>
        </li>
        <li className="credits__list-element">
          <span className="main__text">Telegram icon from&nbsp;</span>
          <Link
            className="credits__link"
            to="https://icons8.com/icon/QP6ADhc43z2T/telegram#:~:text=look%20like%20this%3A-,Telegram,-icon%20by%20Icons8"
          >
            Freepik.com
          </Link>
          <img className="credits__image" src={telegramIcon}></img>
        </li>
      </ul>
    </section>
  );
}
