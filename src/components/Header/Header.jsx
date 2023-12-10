import React from 'react';
import './Header.scss';

import Logo from '../Logo/Logo.jsx';
import Menu from '../Menu/Menu.jsx';
import SocialLinks from '../SocialLinks/SocialLinks.jsx';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Menu />
      <SocialLinks />
      {/* <div className="header__content"> 
      </div> */}
    </header>
  );
}

export default Header;
