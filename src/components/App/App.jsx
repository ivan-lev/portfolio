import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { LanguageContext, languages } from '../../contexts/languageContext.js';

import ToggleLanguageButton from '../ToggleLanguageButton/ToggleLanguageButton.jsx';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton.jsx';
import setColorTheme from '../../utils/setColorTheme.js';

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import About from '../About/About.jsx';
import Contact from '../Contact/Contact.jsx';
import Credits from '../Credits/Credits.jsx';

function App() {
  const localStoredLang = localStorage.getItem('lang');
  const localStoredTheme = localStorage.getItem('theme');
  const [language, setLanguage] = useState(localStoredLang);
  const [theme, setTheme] = useState(localStoredTheme);

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
    setLanguage(languages[localStoredLang]);

    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    setColorTheme(theme);
  }, []);

  return (
    <div className="page">
      <ToggleLanguageButton language={localStoredLang} setLanguage={setLanguage} />
      <ToggleThemeButton theme={theme} setTheme={setTheme} />
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
