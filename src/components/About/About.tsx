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
import { biography } from '../../variables/translation-biography.ts';

export default function About() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <section className="about">
      <article>
        <h2 className="title-gray">{TRANSLATION.ABOUT_ME.TITLE[LANG]}</h2>
        <p className="text">{TRANSLATION.ABOUT_ME.INFO[LANG]}</p>
        <h3 className="text">{TRANSLATION.ABOUT_ME.BIOGRAPHY[LANG]}</h3>

        <div className="text">
          <ul>
            {biography.map(biographyElement => (
              <li key={biographyElement.id}>{biographyElement[LANG]}</li>
            ))}
          </ul>
        </div>
        <a
          href="/src/assets/cv/ivan-lev-cv.pdf"
          target="_blank"
          className="about__download-cv-button"
        >
          {TRANSLATION.ABOUT_ME.DOWNLOAD_CV[LANG]}
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
            <ExperienceElement experience={education} key={education.id} lang={LANG} />
          ))}
        </ul>
      </article>
    </section>
  );
}
