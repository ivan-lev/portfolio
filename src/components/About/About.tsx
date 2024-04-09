import './About.scss';

//hooks
import { useContext } from 'react';

//components
import ExperienceElement from '../ExperienceElement/ExperiencsElement.tsx';

//variables and contexts
import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

import { educations } from '../../variables/experience.ts';
// below import is created for future
// import { jobs } from '../../variables/experience.ts';

export default function About() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <section className="about">
      {/* Work
      I'm self-taught programmer from Russia.
      One day I decided to switch career from being bartender.
      What I didnt know back then is that in the process of learning to code I would soon discover a true passion.
      I have a one years of experience developing web applications, building websites and contributing to Open Source projects.
      React - thats the technology I know best and work daily with.

      Bio
      1987 Born in Magnitogorsk, Russia.
      2009 Graduated from Magnitogorsk State University
      2015 Started e-commerce project with vintage Japanese ceramics
      2023 to present Works as a Frontend developer

      My interests
      Чай, фотография */}

      <article>
        <h2 className="title-gray">{TRANSLATION.ABOUT_ME.TITLE[LANG]}</h2>
        <p className="text">{TRANSLATION.ABOUT_ME.INFO[LANG]}</p>
        <a
          href="/src/assets/cv/ivan-lev-cv.pdf"
          target="_blank"
          className="about__download-cv-button"
        >
          Download CV
        </a>
      </article>
      {/* <article>
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
      </article> */}
      <article>
        <h2 className="title-gray">{TRANSLATION.ABOUT_ME.EDUCATION[LANG]}</h2>
        <ul className="about__list">
          {educations.map(education => (
            <ExperienceElement experience={education} key={education.id} />
          ))}
        </ul>
      </article>
    </section>
  );
}
