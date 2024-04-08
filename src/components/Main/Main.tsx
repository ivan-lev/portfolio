import './Main.scss';

import { useContext } from 'react';

import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

import avatar from '../../assets/images/avatar.jpg';

import ProjectElement from '../ProjectElement/ProjectElement.tsx';
import { projects } from '../../variables/projects.ts';

import TechElement from '../TechElement/TechElement.tsx';

import { techStack } from '../../variables/techStack.ts';

function Main(): JSX.Element {
  const LANG: string = useContext(LanguageContext);
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
                <TechElement technology={techStack[element]} key={techStack[element].title} />
              )
          )}
        </ul>
      </section>

      <section className="projects">
        <h2 className="title-blue">{TRANSLATION?.MAIN.PROJECTS_TITLE[LANG]}</h2>
        <p className="subtitle">{TRANSLATION?.MAIN.PROJECTS_SUBTITLE[LANG]}</p>
        <ul className="main__projects-list">
          {projects.map(project => (
            <ProjectElement project={project} key={project.id} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
