import React from 'react';
import './Main.scss';

import avatar from '../../images/avatar.jpg';
import sass from '../../images/icon-tech-sass.svg';

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
        <h2 className="main__stack-title">My Tech Stack</h2>
        <p className="main__stack-subtitle"> Technologies I’ve been working with recently</p>
        <ul className="main__stack-list">
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
          <li>
            <img src={sass}></img>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
