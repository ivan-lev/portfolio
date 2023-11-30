import React from 'react';
import { Link } from 'react-router-dom';

import './Logo.scss';
import logo from '../../images/favicon.png';

export default function Logo() {
  return (
    <Link to="/">
      <img className="logo" src={logo}></img>
    </Link>
  );
}
