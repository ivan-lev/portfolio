import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { LanguageContext, translations } from '../../contexts/languageContext.js';

import ToggleLanguageButton from '../ToggleLanguageButton/ToggleLanguageButton.jsx';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton.jsx';
import handleSetColorTheme from '../../utils/handleSetColorTheme.js';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Credits from '../Credits/Credits.jsx';

function App() {
  const localStoredLanguage = localStorage.getItem('lang');
  const localStoredTheme = localStorage.getItem('theme');
  const [translation, setTranslation] = useState(translations.localStoredLanguage);
  const [theme, setTheme] = useState(localStoredTheme);

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
    setTranslation(translations[localStoredLanguage]);

    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    handleSetColorTheme(theme);
  }, []);

  return (
    <div className="page">
      <div className="toggleButtons">
        <ToggleLanguageButton translation={translation} setTranslation={setTranslation} />
        <ToggleThemeButton theme={theme} setTheme={setTheme} />
      </div>

      <LanguageContext.Provider value={translation}>
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
