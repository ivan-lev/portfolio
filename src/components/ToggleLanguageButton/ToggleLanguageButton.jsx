import React from 'react';
import './ToggleLanguageButton.scss';

import { languages } from '../../contexts/languageContext.js';

export default function ToggleLanguageButton({ language, setLanguage }) {
  const toggleLanguage = () => {
    if (language.name === 'en') {
      localStorage.setItem('lang', 'ru');
      setLanguage(languages['ru']);
    }
    if (language.name === 'ru') {
      localStorage.setItem('lang', 'en');
      setLanguage(languages['en']);
    }
  };

  return (
    <button className="toggle-language-button" onClick={toggleLanguage}>
      {language.name === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
