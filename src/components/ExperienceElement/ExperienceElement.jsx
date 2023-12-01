import React from 'react';
import './ExperienceElement.scss';

export default function ExperienceElement({ position, type, organization, place, period }) {
  return (
    <div className="experience__container">
      <p className="experience__row">
        <span className="experience__position"></span>
        <span className="experience__type"></span>
      </p>
      <p className="experience__container">
        <span className="experience__organization"></span>
        <span className="experience__place"></span>
        <span className="experience__period"></span>
      </p>
    </div>
  );
}
