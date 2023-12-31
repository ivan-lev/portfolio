import { useContext } from 'react';
import './Uses.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

import { techStack } from '../../variables/techStack.js';

export default function Uses() {
  const translation = useContext(TranslationContext);

  function createListElement(name) {
    return (
      <li className="uses__list-element">
        <div className="uses__header">
          <img className="uses__logo" src={techStack[name]?.logo}></img>
          <h3 className="uses__title">{techStack[name]?.title}</h3>
        </div>

        <p className="text uses__text">{translation?.usesTranslations[name]}</p>
      </li>
    );
  }

  return (
    <article className="uses__article">
      <h1 className="title-gray">{translation?.usesTranslations?.usesTitle}</h1>
      <div className="subtitle">{translation?.usesTranslations?.usesSubtitle}</div>
      <section className="uses__section">
        <h2 className="uses__title uses__section-title">{translation?.usesTranslations?.design}</h2>
        <ul className="uses__list">{createListElement('figma')}</ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">
          {translation?.usesTranslations?.frontend}
        </h2>
        <ul className="uses__list">
          {createListElement('vscode')}
          {createListElement('reactjs')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">
          {translation?.usesTranslations?.backend}
        </h2>
        <ul className="uses__list">
          {createListElement('nodejs')}
          {createListElement('mongodb')}
          {createListElement('postman')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">
          {translation?.usesTranslations?.hardware}
        </h2>
        <ul className="uses__list">
          {createListElement('macbook')}
          {createListElement('jabra')}
        </ul>
      </section>

      <section className="uses__section">
        <h2 className="uses__title uses__section-title">
          {translation?.usesTranslations?.healthAndProductivity}
        </h2>
        <ul className="uses__list">{createListElement('insightTimer')}</ul>
      </section>
    </article>
  );
}
