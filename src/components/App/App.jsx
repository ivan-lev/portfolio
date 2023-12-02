import React, { useState, useEffect } from 'react';
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

  return (
    <div className="page">
      <button className="toggle-language-button" onClick={toggleLanguage}>
        ru-en
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
