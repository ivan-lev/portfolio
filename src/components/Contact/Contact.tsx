import { useContext } from 'react';
import './Contact.scss';

import { LanguageContext } from '../../contexts/languageContext.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

export default function Contact() {
  const LANG = useContext(LanguageContext);
  const TRANSLATION = useContext(TranslationContext);

  return (
    <article>
      <h2 className="title-gray">{TRANSLATION?.CONTACT.TEXT[LANG]}</h2>
      <a className="about__email" href="mailto:ivanlev@mail.com">
        ivanlev@mail.com
      </a>
    </article>
  );
}
