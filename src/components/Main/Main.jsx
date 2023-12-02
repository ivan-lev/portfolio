import React, { useContext } from 'react';
import './Main.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

import avatar from '../../images/avatar.jpg';
import sass from '../../images/icon-tech-sass.svg';
import css from '../../images/icon-tech-css.svg';
import git from '../../images/icon-tech-git.svg';
import github from '../../images/icon-tech-github.svg';
import html from '../../images/icon-tech-html.svg';
import js from '../../images/icon-tech-js.svg';
import nodejs from '../../images/icon-tech-nodejs.svg';
import react from '../../images/icon-tech-react.svg';
import redux from '../../images/icon-tech-redux.svg';

import filler from '../../images/filler.png';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import TechElement from '../TechElement/TechElement.jsx';

function Main() {
  const language = useContext(LanguageContext);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          {language.heroTextFirst},
          <br />
          {language.heroTextSecond}
          <br />
          <span className="main__hero-name">{language.heroName}</span>
          <br />
          {language.heroTextThird}
        </div>
        <img className="main__avatar" src={avatar} alt={language.avatarAlt}></img>
      </section>
      <section className="main__stack">
        <h2 className="main__title">{language.techStack}</h2>
        <p className="main__subtitle">{language.technologies}</p>
        <ul className="main__stack-list">
          <TechElement logo={html} alt="HTML logo" />
          <TechElement logo={css} alt="CSS logo" />
          <TechElement logo={sass} alt="SASS logo" />
          <TechElement logo={git} alt="Git logo" />
          <TechElement logo={github} alt="GitHub logo" />
          <TechElement logo={js} alt="JavaScript logo" />
          <TechElement logo={nodejs} alt="NodeJS logo" />
          <TechElement logo={react} alt="React logo" />
          <TechElement logo={redux} alt="Redux logo" />
        </ul>
      </section>
      <section className="projects">
        <h2 className="main__title">{language.projectsTitle}</h2>
        <p className="main__subtitle">{language.projectsSubtitle}</p>
        <ul className="main__projects-list">
          <ProjectCard filler={filler} />
          <ProjectCard filler={filler} />
          <ProjectCard filler={filler} />
          <ProjectCard filler={filler} />
          <ProjectCard filler={filler} />
          <ProjectCard filler={filler} />
        </ul>
      </section>
    </main>
  );
}

export default Main;
