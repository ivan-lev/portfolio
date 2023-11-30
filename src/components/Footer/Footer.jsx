import React from 'react';
import './Footer.scss';

import Logo from '../Logo/Logo.jsx';
import Menu from '../Menu/Menu.jsx';
import SocialIcons from '../SocialIcons/SocialLinks.jsx';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Logo />
        <div className="footer__top-content">
          <a href="tel:+79030909030">+7-903-090-90-30</a>
          <a href="mailto:fanatos@mail.ru">fanatos@mail.ru</a>
          <SocialIcons />
        </div>
      </div>
      <div className="footer__divider" />
      <div className="footer__bottom">
        <Menu />
        <div className="footer__bottom-credits">
          Designed and built by Ivan Lev with Love & Chinese Fine Teas
        </div>
      </div>
    </footer>
  );
}

export default Footer;
