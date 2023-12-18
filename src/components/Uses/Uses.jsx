import React from 'react';
import './Uses.scss';

import { techStackNew } from '../../variables/techStack.js';

import airbuds from '../../assets/icons/misc/airbuds.svg';
import laptop from '../../assets/icons/misc/laptop.svg';
import meditation from '../../assets/icons/misc/meditation.svg';

export default function Uses() {
  function createListElement(logo, title, text) {
    return (
      <li className="uses__list-element">
        <div className="uses__header">
          {logo ? <img className="uses__logo" src={logo}></img> : null}
          <h3 className="uses__title">{title}</h3>
        </div>

        <p className="main__text uses__text">{text}</p>
      </li>
    );
  }

  return (
    <article className="uses__article">
      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Дизайн</h2>
        <ul className="uses__list">
          {createListElement(
            techStackNew.figma.logo,
            'Figma',
            'Для вёрстки я использую Figma, так как это лучшее приложение в своей сфере. У меня есть минимальный опыт работы с макетами, созданными в Photoshop, но Figma де-факто стала стандартом в отрасли.'
          )}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Фронтенд</h2>
        <ul className="uses__list">
          {createListElement(
            techStackNew.vscode.logo,
            'Visual Studio Code',
            'Изначально я писал код в Sublime Text, потом перешёл на Atom. Сейчас я остановился на VSCode. Хотя есть и другие, более продвинутые инструменты разработки, мне нравится его скорость и доступность. Можно создавать проекты на МакБуке 10-летней давности и VSCode не будет тормозить. Он очень хорош.'
          )}
          {createListElement(
            techStackNew.react.logo,
            'React',
            'Согласно опросу разработчиков на Stack Overflow, по состоянию на 2023 год, библиотека React лидирует по популярности, пользуясь спросом у 40% респондентов. Я пишу веб-приложения, используя React, так как это удобный инструмент с богатой экосистемой. Этот сайт создан также на React.'
          )}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Бэкенд</h2>
        <ul className="uses__list">
          {createListElement(
            techStackNew.nodejs.logo,
            'NodeJS',
            'У меня есть базовые знания по созданию сервера на NodeJS с использованием библиотеки Express.js. Сервер на NodeJS позволяет работать как с файловой системой, так и с базами данных посредством встроенных инструментов и библиотек, расширяющих его функционал.'
          )}
          {createListElement(
            techStackNew.mongo.logo,
            'MongoDB',
            'Одна из популярнейших NoSQL баз данных, и самая распространённая среди используемых с Node.js. Данные хранятся в структурах, близких JSON и их просто обрабатывать из JavaScript, что очень удобно.'
          )}
          {createListElement(
            techStackNew.postman.logo,
            'Postman',
            'Postman - удобная программа, которая позволяет отправлять на сервер запросы и проверять, как на них реагирует сервер. Это гибкий инструмент, с помощью которого можно быстро протестировать работу api.'
          )}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Оборудование</h2>
        <ul className="uses__list">
          {createListElement(
            laptop,
            'MacBook Air 13"',
            'Обычно здесь пишут о своей крутой технике, но я перешёл с нового 15-дюймового Lenovo на 13-дюймовый MacBook Air 2013 года. Он оказался очень проворным, и спокойно выдерживает нагрузки.'
          )}
          {createListElement(
            airbuds,
            'Jabra Elite Active 65t',
            'Для фиксации внимания на рабочем процессе в новых или шумных местах - это отличный гаджет с пассивным шумоподавлением. А при необходимости, можно подавить шум и активно, включив музыку :)'
          )}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Здоровье и продуктивность</h2>
        <ul className="uses__list">
          {createListElement(
            meditation,
            'Insight Timer',
            'Я пользуюсь этой программой для медитации и практик. Она ежедневно напоминает мне о том, что нужно оценить своё состояние и уделить время для практики. Поддерживать баланс - это залог продуктивности.'
          )}
        </ul>
      </section>
    </article>
  );
}
