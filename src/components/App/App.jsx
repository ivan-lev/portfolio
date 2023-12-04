import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { LanguageContext, languages } from '../../contexts/languageContext.js';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Credits from '../Credits/Credits.jsx';

function App() {
  const localStoredLang = localStorage.getItem('lang');
  //const localStoredColorTheme = JSON.parse(localStorage.getItem('currentTheme'));
  const [language, setLanguage] = useState('localStoredLang');

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
    setLanguage(languages[localStoredLang]);
  }, []);

  const toggleLanguage = () => {
    if (localStoredLang === 'en') {
      localStorage.setItem('lang', 'ru');
      setLanguage(languages['ru']);
    }
    if (localStoredLang === 'ru') {
      localStorage.setItem('lang', 'en');
      setLanguage(languages['en']);
    }
  };

  const toggleTheme = () => {
    const elem = document.documentElement;
    const computedStyles = getComputedStyle(elem);
    const bgColor = computedStyles.getPropertyValue('--bg-color-primary');
    if (bgColor === '#faf0e6') {
      elem.style.setProperty('--bg-color-primary', 'var(--bg-dark-main)');
      elem.style.setProperty('--bg-color-secondary', 'var(--bg-dark-card');
      elem.style.setProperty('--color-hero', 'var(--color-dark-hero)');
      elem.style.setProperty('--color-primary', 'var(--color-dark-primary)');
      elem.style.setProperty('--color-secondary', 'var(--color-dark-secondary)');
      elem.style.setProperty('--color-additional', 'var(--color-dark-additional)');
      elem.style.setProperty('--color-icon', 'var(--color-dark-icon)');
    }
    if (bgColor === '#191919') {
      elem.style.setProperty('--bg-color-primary', 'var(--bg-beige-main)');
      elem.style.setProperty('--bg-color-secondary', 'var(--bg-beige-card');
      elem.style.setProperty('--color-hero', 'var(--color-beige-hero)');
      elem.style.setProperty('--color-primary', 'var(--color-beige-primary)');
      elem.style.setProperty('--color-secondary', 'var(--color-beige-secondary)');
      elem.style.setProperty('--color-additional', 'var(--color-beige-additional)');
      elem.style.setProperty('--color-icon', 'var(--color-beige-icon)');
    }
  };

  return (
    <div className="page">
      <button className="toggle-language-button" onClick={toggleLanguage}>
        {language.name === 'en' ? 'ru' : 'en'}
      </button>
      <button className="toggle-theme-button" onClick={toggleTheme}>
        theme
      </button>
      <LanguageContext.Provider value={language}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/credits" element={<Credits />} />
        </Routes>
        <Footer />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
