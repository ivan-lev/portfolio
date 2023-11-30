import React from 'react';
import './TechElement.scss';

export default function TechElement({ logo, alt }) {
  return (
    <li className="main__stack-list-element">
      <img className="main__stack-list-logo" alt={alt} src={logo}></img>
    </li>
  );
}
