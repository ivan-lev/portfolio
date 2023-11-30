import React from 'react';
import { Link } from 'react-router-dom';

import './SocialLinks.scss';

import iconGithub from '../../images/icon-social-github.svg';
import iconLinkedIn from '../../images/icon-social-linkedin.svg';

export default function SocialLinks() {
  return (
    <div className="social-links">
      <Link to="#">
        <img className="social-icon" src={iconGithub}></img>
      </Link>
      <Link to="#">
        <img className="social-icon" src={iconLinkedIn}></img>
      </Link>
    </div>
  );
}
