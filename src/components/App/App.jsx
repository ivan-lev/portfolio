import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

import { TranslationContext, TRANSLATION } from '../../contexts/translationContext.js';
import { LanguageContext } from '../../contexts/languageContext.js';

import ToggleLanguageButton from '../ToggleLanguageButton/ToggleLanguageButton.jsx';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton.jsx';
import handleSetColorTheme from '../../utils/handleSetColorTheme.js';

import Logo from '../Logo/Logo.jsx';
import Menu from '../Menu/Menu.jsx';
import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import About from '../About/About.jsx';
import Uses from '../Uses/Uses.jsx';
import Contact from '../Contact/Contact.jsx';
import Credits from '../Credits/Credits.jsx';

function App() {
  const localStoredLanguage = localStorage.getItem('lang');
  const localStoredTheme = localStorage.getItem('theme');
  const [lang, setLang] = useState(localStoredLanguage);
  const [theme, setTheme] = useState(localStoredTheme);

  useEffect(() => {
    if (!localStorage.getItem('theme')) {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }

    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
      setLang('en');
    }
  }, []);

  useEffect(() => {
    handleSetColorTheme(theme);
  }, [theme]);

  return (
    <div className="page">
      <div className="toggleButtons">
        <ToggleLanguageButton language={lang} setLanguage={setLang} />
        <ToggleThemeButton theme={theme} setTheme={setTheme} />
      </div>

      <LanguageContext.Provider value={lang}>
        <TranslationContext.Provider value={TRANSLATION}>
          <Header>
            <Logo />
            <Menu />
          </Header>
          <Routes>
            <Route path="/" element={<Navigate to="/portfolio/" />} />
            <Route path="/portfolio/" element={<Main />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/uses" element={<Uses />} />
            <Route path="/portfolio/contact" element={<Contact />} />
            <Route path="/portfolio/credits" element={<Credits />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </TranslationContext.Provider>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
