import { useContext } from 'react';
import './Uses.scss';

import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

import { techStack } from '../../variables/techStack.ts';

export default function Uses() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  function createListElement(name: string) {
    return (
      <li className="uses__list-element">
        <div className="uses__header">
          <img className="uses__logo" src={techStack[name]?.logo}></img>
          <h3 className="uses__title">{techStack[name]?.title}</h3>
        </div>
        <p className="text uses__text">{TRANSLATION?.USES[name][LANG]}</p>
      </li>
    );
  }

  return (
    <article className="uses__article">
      <h1 className="title-gray">{TRANSLATION?.USES.TITLE[LANG]}</h1>
      <div className="subtitle">{TRANSLATION?.USES.SUBTITLE[LANG]}</div>
      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{TRANSLATION?.USES.DESIGN[LANG]}</h2>
        <ul className="uses__list">{createListElement('FIGMA')}</ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{TRANSLATION?.USES.FRONTEND[LANG]}</h2>
        <ul className="uses__list">
          {createListElement('VSCODE')}
          {createListElement('REACT')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{TRANSLATION?.USES.BACKEND[LANG]}</h2>
        <ul className="uses__list">
          {createListElement('NODEJS')}
          {createListElement('MONGODB')}
          {createListElement('POSTMAN')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{TRANSLATION?.USES.HARDWARE[LANG]}</h2>
        <ul className="uses__list">
          {createListElement('MACBOOK')}
          {createListElement('JABRA')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{TRANSLATION?.USES.HEALT_PROD[LANG]}</h2>
        <ul className="uses__list">{createListElement('INSIGHT_TIMER')}</ul>
      </section>
    </article>
  );
}
