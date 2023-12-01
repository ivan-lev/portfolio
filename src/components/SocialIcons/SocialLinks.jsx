import React from 'react';
import { Link } from 'react-router-dom';

import './SocialLinks.scss';

import githubIcon from '../../images/icon-social-github.svg';
import linkedInIcon from '../../images/icon-social-linkedin.svg';
import telegramIcon from '../../images/icon-social-telegram.svg';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <Link to="https://github.com/ivan-lev">
        <img className="social-icon" src={githubIcon}></img>
      </Link>
      <Link to="#">
        <img className="social-icon" src={linkedInIcon}></img>
      </Link>
      <Link to="https://t.me/ivanlev">
        <img className="social-icon" src={telegramIcon}></img>
      </Link>
    </div>
  );
}
