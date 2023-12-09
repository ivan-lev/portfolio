import React from 'react';
import './ToggleLanguageButton.scss';

import { translations } from '../../contexts/languageContext.js';

export default function ToggleLanguageButton({ translation, setTranslation }) {
  const toggleLanguage = () => {
    if (translation?.name === 'en') {
      localStorage.setItem('lang', 'ru');
      setTranslation(translations['ru']);
    }
    if (translation?.name === 'ru') {
      localStorage.setItem('lang', 'en');
      setTranslation(translations['en']);
    }
  };

  return (
    <button className="toggle-language-button" onClick={toggleLanguage}>
      {translation?.name === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
