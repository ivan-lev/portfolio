import React from 'react';
import './Header.scss';

import Logo from '../Logo/Logo.jsx';
import Menu from '../Menu/Menu.jsx';

function Header({ children }) {
  return <header className="header">{children}</header>;
}

export default Header;
