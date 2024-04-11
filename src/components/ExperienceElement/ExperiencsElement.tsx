import './ExperienceElement.scss';

import type { Experience } from '../../types/Experience';

export default function ExperienceElement({
  experience,
  lang
}: {
  experience: Experience;
  lang: string;
}) {
  const { position, type, organization, location, period } = experience;
  return (
    <li className="experience__container">
      <p className="experience__row">
        <span className="experience__position">{position[lang]}</span>
        {type ? <span className="experience__type">{type[lang]}</span> : ''}
      </p>
      <p className="experience__row">
        <span className="experience__organization">{organization[lang]}</span>
        {location ? <span className="experience__location">{location[lang]}</span> : ''}
        <span className="experience__period">{period[lang]}</span>
      </p>
    </li>
  );
}
