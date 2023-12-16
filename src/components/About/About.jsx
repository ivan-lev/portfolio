import React, { useContext } from 'react';
import './About.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import { educations, jobs } from '../../variables/experience.js';
import ExperienceElement from '../ExperienceElement/ExperienceElement.jsx';

export default function About() {
  const translation = useContext(TranslationContext);

  return (
    <section className="about">
      <article>
        <h2 className="main__title">{translation.aboutmeTitle}</h2>
        <p className="main__text">{translation.aboutmeInfo}</p>
      </article>
      <article>
        <h2 className="main__title">{translation.workExperience}</h2>
        <ul className="about__list">
          {jobs.map(job => (
            <ExperienceElement
              key={job.id}
              position={job.position}
              type={job.type}
              organization={job.organization}
              location={job.location}
              period={job.period}
            />
          ))}
        </ul>
      </article>
      <article>
        <h2 className="main__title">{translation.education}</h2>
        {educations.map(education => (
          <ExperienceElement
            key={education.id}
            position={education.position}
            type={education.type}
            organization={education.organization}
            place={education.place}
            period={education.period}
          />
        ))}
      </article>
    </section>
  );
}
