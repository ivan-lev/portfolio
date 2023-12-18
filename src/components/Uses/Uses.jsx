import React, { useContext } from 'react';
import './Uses.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import { techStackNew } from '../../variables/techStack.js';

import Airbuds from '../../assets/icons/misc/airbuds.svg?react';
import Laptop from '../../assets/icons/misc/laptop.svg?react';
import Meditation from '../../assets/icons/misc/meditation.svg?react';

export default function Uses() {
  const translation = useContext(TranslationContext);

  function createListElement(logo, title, text) {
    return (
      <li className="uses__list-element">
        <div className="uses__header">
          {typeof logo === 'string' ? <img className="uses__logo" src={logo}></img> : logo}
          <h3 className="uses__title">{title}</h3>
        </div>

        <p className="main__text uses__text">{text}</p>
      </li>
    );
  }

  return (
    <article className="uses__article">
      <h1 className="main__title">{translation.usesTitle}</h1>
      <div className="main__subtitle">{translation.usesSubtitle}</div>
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
            <Laptop fill="gray" width="20" height="20" />,
            'MacBook Air 13"',
            'Обычно здесь пишут о своей крутой технике, но я перешёл с нового 15-дюймового Lenovo на 13-дюймовый MacBook Air 2013 года. Он оказался очень проворным, и спокойно выдерживает нагрузки.'
          )}
          {createListElement(
            <Airbuds fill="gray" height="20" width="20" />,
            'Jabra Elite Active 65t',
            'Для фиксации внимания на рабочем процессе в новых или шумных местах - это отличный гаджет с пассивным шумоподавлением. А при необходимости, можно подавить шум и активно, включив музыку :)'
          )}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">Здоровье и продуктивность</h2>
        <ul className="uses__list">
          {createListElement(
            <Meditation fill="gray" width="20" height="20" />,
            'Insight Timer',
            'Я пользуюсь этой программой для медитации и практик. Она ежедневно напоминает мне о том, что нужно оценить своё состояние и уделить время для практикe. Поддерживать баланс - это залог продуктивности.'
          )}
        </ul>
      </section>
    </article>
  );
}
