import { useContext } from 'react';
import './Contact.scss';

import { TranslationContext } from '../../contexts/translationContext.js';

export default function Contact() {
  const translation = useContext(TranslationContext);

  return (
    <article>
      <h2 className="title-gray">{translation.contactText}</h2>
      <a className="about__email" href="mailto:fanatos@mail.ru">
        fanatos@mail.ru
      </a>
    </article>
  );
}
