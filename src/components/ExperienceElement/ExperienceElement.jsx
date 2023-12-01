import React from 'react';
import './ExperienceElement.scss';

export default function ExperienceElement({ position, type, organization, place, period }) {
  return (
    <div className="experience__container">
      <p className="experience__row">
        <span className="experience__position">{position}</span>
        <span className="experience__type">{type}</span>
      </p>
      <p className="experience__row">
        <span className="experience__organization">{organization}</span>
        <span className="experience__location">{place}</span>
        <span className="experience__period">{period}</span>
      </p>
    </div>
  );
}
