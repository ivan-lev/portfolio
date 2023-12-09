import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import { TranslationContext, translations } from '../../contexts/translationContext.js';

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
  const [lang, setLang] = useState(localStoredLanguage);
  const [theme, setTheme] = useState(localStoredTheme);

  useEffect(() => {
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
      setLang('en');
    }

    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
    }
    handleSetColorTheme(theme);
  }, [theme]);

  return (
    <div className="page">
      <div className="toggleButtons">
        <ToggleLanguageButton language={lang} setLanguage={setLang} />
        <ToggleThemeButton theme={theme} setTheme={setTheme} />
      </div>

      <TranslationContext.Provider value={translations[lang]}>
        <Header />
        <Routes>
          <Route path="/portfolio" element={<Main />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="credits" element={<Credits />} />
          </Route>
        </Routes>
        <Footer />
      </TranslationContext.Provider>
    </div>
  );
}

export default App;
