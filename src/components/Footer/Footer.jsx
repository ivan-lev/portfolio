import React, { useContext } from 'react';
import './Footer.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import SocialLinks from '../SocialLinks/SocialLinks.jsx';

function Footer() {
  const translation = useContext(TranslationContext);

  return (
    <footer className="footer">
      <div className="footer__divider" />
      <span className="footer__credits">{translation?.footerText}</span>
      <SocialLinks />
      <div className="footer__info">
        <a href="tel:+79030909030">+7-903-090-90-30</a>
        <a href="mailto:fanatos@mail.ru">fanatos@mail.ru</a>
      </div>
    </footer>
  );
}

export default Footer;
