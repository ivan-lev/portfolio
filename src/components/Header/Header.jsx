import React from 'react';
import './Header.scss';

import Logo from '../Logo/Logo.jsx';
import Menu from '../Menu/Menu.jsx';
import SocialLinks from '../SocialIcons/SocialLinks.jsx';

function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="header__content">
        <Menu />
        <SocialLinks />
      </div>
    </header>
  );
}

export default Header;
