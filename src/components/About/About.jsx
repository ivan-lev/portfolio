import { useContext } from 'react';
import {Link} from "react-router-dom";
import './About.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import { educations, jobs } from '../../variables/experience.js';
import ExperienceElement from '../ExperienceElement/ExperienceElement.jsx';

export default function About() {
  const translation = useContext(TranslationContext);

  return (
    <section className="about">
      {/* Work
      I'm self-taught programmer from Russia.
      One day I decided to switch career from being bartender.
      What I didnt know back then is that in the process of learning to code I would soon discover a true passion.
      I have a one years of experience developing web applications, building websites and contributing to Open Source projects.
      React - thats the technology I know best and work daily with.

      Bio
      1995Born in Balakovo, Russia.
      2012Graduated from the Physics and Mathematics Lyceum in Semenov
      2013Started working as a bartender
      2022 to presentWorks as a Frontend developer

      My interests
      Чай, фотография */}

      <article>
        <h2 className="title-gray">{translation.aboutmeTitle}</h2>
        <p className="text">{translation.aboutmeInfo}</p>
        <Link className="about__download-cv-button" to="#">Download CV</Link>
      </article>
      <article>
        <h2 className="title-gray">{translation.workExperience}</h2>
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
        <h2 className="title-gray">{translation.education}</h2>
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
