import { Link } from 'react-router-dom';

import './SocialLinks.scss';

import GithubIcon from '../../assets/icons/icon-github.svg?react';
import LinkedInIcon from '../../assets/icons/icon-linkedin.svg?react';
import TelegramIcon from '../../assets/icons/icon-telegram.svg?react';
import InstagramIcon from '../../assets/icons/icon-instagram.svg?react';

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
      <Link className="social-icon" to="https://instagram.com/tea_lion">
        <InstagramIcon />
      </Link>
    </div>
  );
}
