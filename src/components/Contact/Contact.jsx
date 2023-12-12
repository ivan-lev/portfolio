import React, { useContext } from 'react';
import './Contact.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

export default function Contact() {
  const translation = useContext(TranslationContext);

  return (
    <section>
      <h2 className="main__title">{translation.contactText}</h2>
      <a className="about__email" href="mailto:fanatos@mail.ru">
        fanatos@mail.ru
      </a>
    </section>
  );
}