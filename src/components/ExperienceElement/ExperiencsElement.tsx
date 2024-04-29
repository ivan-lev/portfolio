import './ExperienceElement.scss';

import { useState } from 'react';

import type { Experience } from '../../types/Experience';
import PreviewModal from '../PreviewModal/PreviewModal';

export default function ExperienceElement({
  experience,
  lang
}: {
  experience: Experience;
  lang: string;
}) {
  const [isModalShown, setIsModalShown] = useState<boolean>(false);
  const { position, type, organization, location, period, certificate } = experience;

  const handleShowModal = (): void => {
    document.body.style.overflow = 'hidden';
    setIsModalShown(true);
  };

  const handleHideModal = (): void => {
    document.body.style.overflow = 'visible';
    setIsModalShown(false);
  };

  return (
    <li className="experience__wrapper">
      <div className="experience__certificate-container">
        {certificate && (
          <img
            className="experience__certificate-image"
            src={certificate}
            onClick={handleShowModal}
          ></img>
        )}
        {isModalShown && <PreviewModal imageLink={certificate ?? ''} hideModal={handleHideModal} />}
      </div>
      <div className="experience__information-container">
        <p className="experience__row">
          <span className="experience__position">{position[lang]}</span>
          {type ? <span className="experience__type">{type[lang]}</span> : ''}
        </p>
        <p className="experience__row">
          <span className="experience__organization">{organization[lang]}</span>
          {location ? <span className="experience__location">{location[lang]}</span> : ''}
          <span className="experience__period">{period[lang]}</span>
        </p>
      </div>
    </li>
  );
}
