import React, { useContext } from 'react';
import './Main.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import avatar from '../../images/avatar.jpg';

import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import { projects } from '../../variables/projects.js';

import TechElement from '../TechElement/TechElement.jsx';
import { techStack } from '../../variables/techStack.js';

function Main() {
  const language = useContext(TranslationContext);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          {language?.heroTextFirst}
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
          {techStack.map(({ logo, alt }) => (
            <TechElement key={alt} logo={logo} alt={alt} />
          ))}
        </ul>
      </section>
      <section className="projects">
        <h2 className="main__title">{language?.projectsTitle}</h2>
        <p className="main__subtitle">{language?.projectsSubtitle}</p>
        <ul className="main__projects-list">
          {projects.map(({ id, preview, title, description, stack, link, ghLink }) => (
            <ProjectCard
              key={id}
              preview={preview}
              title={title}
              description={description}
              stack={stack}
              link={link}
              ghLink={ghLink}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
