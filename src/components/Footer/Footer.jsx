import { useContext } from 'react';
import './Footer.scss';

import { LanguageContext } from '../../contexts/languageContext.js';
import { TranslationContext } from '../../contexts/translationContext.js';

import SocialLinks from '../SocialLinks/SocialLinks.jsx';

function Footer() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <footer className="footer">
      <div className="footer__divider" />
      <span className="footer__credits">{TRANSLATION?.FOOTER.TEXT[LANG]}</span>
      <SocialLinks />
      <div className="footer__info">
        <a href="tel:+79030909030">+7-903-090-90-30</a>
        <a href="mailto:ivanlev@mail.com">ivanlev@mail.com</a>
      </div>
    </footer>
  );
}

export default Footer;
