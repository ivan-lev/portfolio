import React, { useContext } from 'react';
import './About.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

import ExperienceElement from '../ExperienceElement/ExperienceElement.jsx';

export default function About() {
  const translation = useContext(LanguageContext);

  return (
    <section className="about">
      <article>
        <h2 className="main__title">{translation.aboutmeTitle}</h2>
        <p className="main__text">{translation.aboutmeInfo}</p>
      </article>
      <article>
        <h2 className="main__title">{translation.workExperience}</h2>
        <ExperienceElement
          position="Junior Web Developer"
          type="Full Time"
          organization="Yandex Co."
          place="Saint Petersburg"
          period="Jan 2024 - Dec 2025"
        />
        <ExperienceElement
          position="Junior Web Developer"
          type="Internship"
          organization="Mail.ru Co. Ltd"
          place="Moscow"
          period="Jan 2023 - Dec 2024"
        />
      </article>
      <article>
        <h2 className="main__title">{translation.education}</h2>
        <ExperienceElement
          position="Junior Web Developer"
          type="Full Time"
          organization="Yandex Co."
          place="Saint Petersburg"
          period="Jan 2024 - Dec 2025"
        />
      </article>
    </section>
  );
}
