import React from 'react';
import './About.scss';

import ExperienceElement from '../ExperienceElement/ExperienceElement.jsx';

export default function About() {
  return (
    <section className="about">
      <article>
        <h2 className="main__title">About Me</h2>
        <p className="main__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste blanditiis, explicabo
          sapiente molestias et sint facilis officiis aperiam nihil nesciunt aut similique. Illum,
          tempore facere. Adipisci nesciunt nostrum repudiandae?
        </p>
      </article>
      <article>
        <h2 className="main__title">Work Experience</h2>
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
          organization="Yandex Co."
          place="Saint Petersburg"
          period="Jan 2024 - Dec 2025"
        />
      </article>
      <article>
        <h2 className="main__title">Education</h2>
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
