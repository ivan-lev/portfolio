import React, { useContext } from 'react';
import './Main.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

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

import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import TechElement from '../TechElement/TechElement.jsx';

import howToLearn from '../../images/project-previews/how-to-learn.jpg';
import russianTravel from '../../images/project-previews/russian-travel.jpg';
import mesto from '../../images/project-previews/mesto.jpg';
import portfolio from '../../images/project-previews/portfolio.jpg';

function Main() {
  const language = useContext(TranslationContext);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          {language?.heroTextFirst},
          <br />
          {language?.heroTextSecond}
          <br />
          <span className="main__hero-name">{language?.heroName}</span>
          <br />
          {language?.heroTextThird}
        </div>
        <img className="main__avatar" src={avatar} alt={language?.avatarAlt}></img>
      </section>
      <section className="main__stack">
        <h2 className="main__title">{language?.techStack}</h2>
        <p className="main__subtitle">{language?.technologies}</p>
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
        <h2 className="main__title">{language?.projectsTitle}</h2>
        <p className="main__subtitle">{language?.projectsSubtitle}</p>
        <ul className="main__projects-list">
          <ProjectCard
            preview={portfolio}
            title="Сайт-портфолио"
            description="Этот сайт - одностраничное приложение, созданное на React и собранное при помощи Vite. Сайт использует локальное хранилище для сохранения настроек языка и цветовой темы, а также контекст для изменения данных"
            stack="HTML, SCSS, JavaScript, React, Git"
            previewLink="#"
            githubLink="https://github.com/ivan-lev/portfolio"
          />
          <ProjectCard
            preview={mesto}
            title="Mesto"
            description="Проект о путешественниках. В проекте используется библиотека React, веб-приложение делает api-запросы на сервер и получает информацию о пользователе и карточках."
            stack="HTML, CSS, JavaScript, React, Git"
            previewLink="https://ivan-lev.github.io/mesto-react/"
            githubLink="https://github.com/ivan-lev/mesto-react/"
          />
          <ProjectCard
            preview={russianTravel}
            title="Путешествие по России"
            description="Проект о путшествиях по России. Адаптивная вёрстка, применениее flexbox и grid."
            stack="HTML, СSS, Git"
            previewLink="https://ivan-lev.github.io/russian-travel/"
            githubLink="https://github.com/ivan-lev/russian-travel/"
          />
          <ProjectCard
            preview={howToLearn}
            title="Научиться учиться"
            description="Простой проект с адаптивной вёрсткой и анимацией."
            stack="HTML, CSS, BEM, Git"
            previewLink="https://ivan-lev.github.io/how-to-learn/"
            githubLink="https://github.com/ivan-lev/how-to-learn/"
          />

          <ProjectCard />
          <ProjectCard />
        </ul>
      </section>
    </main>
  );
}

export default Main;
