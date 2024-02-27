import { useContext } from 'react';
import './Main.scss';

import { LanguageContext } from '../../contexts/languageContext.js';
import { TranslationContext } from '../../contexts/translationContext.js';

import avatar from '../../assets/images/avatar.jpg';

import ProjectElement from '../ProjectElement/ProjectElement.jsx';
import { projects } from '../../variables/projects.js';

import TechElement from '../TechElement/TechElement.jsx';
import { techStack } from '../../variables/techStack.js';

function Main() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          {TRANSLATION?.MAIN.TEXT_FIRST[LANG]}
          <br />
          {TRANSLATION?.MAIN.TEXT_SECOND[LANG]}
          <br />
          <span className="main__hero-name">{TRANSLATION?.MAIN.NAME[LANG]}</span>
          <br />
          {TRANSLATION?.MAIN.TEXT_THIRD[LANG]}
        </div>
        <img className="main__avatar" src={avatar} alt={TRANSLATION?.MAIN.AVATAR_ALT[LANG]}></img>
      </section>
      <section className="main__stack">
        <h2 className="title-orange">{TRANSLATION?.MAIN.TECH_STACK[LANG]}</h2>
        <p className="subtitle">{TRANSLATION?.MAIN.TECHNOLOGIES[LANG]}</p>
        <ul className="main__stack-list">
          {Object.keys(techStack).map(
            element =>
              techStack[element].showOnMain && (
                <TechElement
                  key={techStack[element].title}
                  logo={techStack[element].logo}
                  alt={techStack[element].title}
                />
              )
          )}
        </ul>
      </section>

      <section className="projects">
        <h2 className="title-blue">{TRANSLATION?.MAIN.PROJECTS_TITLE[LANG]}</h2>
        <p className="subtitle">{TRANSLATION?.MAIN.PROJECTS_SUBTITLE[LANG]}</p>
        <ul className="main__projects-list">
          {projects.map(({ id, preview, title, description, stack, link, ghLink }) => (
            <ProjectElement
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
