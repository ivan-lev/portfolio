import React from 'react';
import { Link } from 'react-router-dom';

import './SocialLinks.scss';

// import githubIcon from '../../images/icon-social-github.svg?react';
import GithubIcon from '../../images/icon-social-github.svg?react';
import LinkedInIcon from '../../images/icon-social-linkedin.svg?react';
import TelegramIcon from '../../images/icon-social-telegram.svg?react';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <Link className="social-icon" to="https://github.com/ivan-lev">
        <GithubIcon />
      </Link>
      <Link className="social-icon" to="#">
        <LinkedInIcon />
      </Link>
      <Link className="social-icon" to="https://t.me/ivanlev">
        <TelegramIcon />
      </Link>
    </div>
  );
}
