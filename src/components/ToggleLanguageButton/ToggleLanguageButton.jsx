import React from 'react';
import './ToggleLanguageButton.scss';

export default function ToggleLanguageButton({ language, setLanguage }) {
  const toggleLanguage = () => {
    if (language === 'en') {
      localStorage.setItem('lang', 'ru');
      setLanguage('ru');
    }
    if (language === 'ru') {
      localStorage.setItem('lang', 'en');
      setLanguage('en');
    }
  };

  return (
    <button className="toggle-language-button" onClick={toggleLanguage}>
      {language === 'en' ? 'RU' : 'EN'}
    </button>
  );
}
