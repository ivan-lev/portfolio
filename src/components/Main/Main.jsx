import React from 'react';
import './Main.scss';

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

function Main() {
  return (
    <main className="main">
      <section className="main__hero">
        <div className="main__hero-text">
          Hi 👋,
          <br />
          My name is
          <br />
          <span className="main__hero-name">Ivan Lev</span>
          <br />I build things for web
        </div>
        <img className="main__avatar" src={avatar} alt="My photo"></img>
      </section>
      <section className="main__stack">
        <h2 className="main__title">My Tech Stack</h2>
        <p className="main__subtitle">Technologies I’ve been working with recently</p>
        <ul className="main__stack-list">
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={html}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={css}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={sass}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={git}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={github}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={js}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={nodejs}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={react}></img>
          </li>
          <li className="main__stack-list-element">
            <img className="main__stack-list-logo" src={redux}></img>
          </li>
        </ul>
      </section>
      <section className="projects">
        <h2 className="main__title">Projects</h2>
        <p className="main__subtitle">Things I’ve built so far</p>
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
