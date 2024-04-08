import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';

// import { TranslationContext, TRANSLATION } from '../../contexts/translationContext.js';
import { LanguageContext } from '../../contexts/languageContext.ts';

import { TRANSLATION } from '../../variables/translation.ts';
import { TranslationContext } from '../../contexts/translationContext.ts';

import ToggleLanguageButton from '../ToggleLanguageButton/ToggleLanguageButton.tsx';
import ToggleThemeButton from '../ToggleThemeButton/ToggleThemeButton.tsx';
import handleSetColorTheme from '../../utils/handleSetColorTheme.ts';

import Logo from '../Logo/Logo.tsx';
import Menu from '../Menu/Menu.tsx';
import Header from '../Header/Header.tsx';
import Main from '../Main/Main.tsx';
import Footer from '../Footer/Footer.tsx';
import About from '../About/About.tsx';
import Uses from '../Uses/Uses.tsx';
import Contact from '../Contact/Contact.tsx';
import Credits from '../Credits/Credits.tsx';

function App() {
  const localStoredLanguage = localStorage.getItem('lang');
  const localStoredTheme = localStorage.getItem('theme');
  const [lang, setLang] = useState(localStoredLanguage ?? 'en');
  const [theme, setTheme] = useState(localStoredTheme ?? 'dark');

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
