import { useContext } from 'react';
import './Main.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import avatar from '../../assets/images/avatar.jpg';

import ProjectElement from '../ProjectElement/ProjectElement.jsx';
import { projects } from '../../variables/projects.js';

import TechElement from '../TechElement/TechElement.jsx';
import { techStack } from '../../variables/techStack.js';

function Main() {
  const translation = useContext(TranslationContext);

  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          {translation?.heroTextFirst}
          <br />
          {translation?.heroTextSecond}
          <br />
          <span className="main__hero-name">{translation?.heroName}</span>
          <br />
          {translation?.heroTextThird}
        </div>
        <img className="main__avatar" src={avatar} alt={translation?.avatarAlt}></img>
      </section>
      <section className="main__stack">
        <h2 className="title-orange">{translation?.techStack}</h2>
        <p className="subtitle">{translation?.technologies}</p>
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
        <h2 className="title-blue">{translation?.projectsTitle}</h2>
        <p className="subtitle">{translation?.projectsSubtitle}</p>
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
