import './ExperienceElement.scss';

import type { Experience } from '../../types/Experience';

export default function ExperienceElement({ experience }: { experience: Experience }) {
  const { position, type, organization, location, period } = experience;
  return (
    <li className="experience__container">
      <p className="experience__row">
        <span className="experience__position">{position}</span>
        {type ? <span className="experience__type">{type}</span> : ''}
      </p>
      <p className="experience__row">
        <span className="experience__organization">{organization}</span>
        {location ? <span className="experience__location">{location}</span> : ''}
        <span className="experience__period">{period}</span>
      </p>
    </li>
  );
}
