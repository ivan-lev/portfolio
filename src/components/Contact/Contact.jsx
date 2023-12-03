import React, { useContext } from 'react';
import './Contact.scss';

import { LanguageContext } from '../../contexts/languageContext.js';

export default function Contact() {
  const language = useContext(LanguageContext);

  return (
    <section>
      <h2 className="main__title">{language.contactText}</h2>
      <a className="about__email" href="mailto:fanatos@mail.ru">
        fanatos@mail.ru
      </a>
    </section>
  );
}
