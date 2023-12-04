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
      <Link to="https://github.com/ivan-lev">
        <GithubIcon className="social-icon" fill="red" />
      </Link>
      <Link to="#">
        <LinkedInIcon className="social-icon" />
      </Link>
      <Link to="https://t.me/ivanlev">
        <TelegramIcon className="social-icon" />
      </Link>
    </div>
  );
}
