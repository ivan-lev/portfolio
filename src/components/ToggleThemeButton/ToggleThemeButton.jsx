import React from 'react';
import './ToggleThemeButton.scss';

import handleSetColorTheme from '../../utils/handleSetColorTheme.js';

import SunIcon from '../../images/icon-theme-sun.svg?react';
import MoonIcon from '../../images/icon-theme-moon.svg?react';

export default function ToggleThemeButton({ theme, setTheme }) {
  function toggleTheme() {
    let newTheme = '';

    theme === 'dark' ? (newTheme = 'beige') : (newTheme = 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    handleSetColorTheme(newTheme);
  }

  return (
    <button className="toggle-theme__button" onClick={toggleTheme}>
      {theme === 'dark' ? (
        <SunIcon className="toggle-theme__icon" />
      ) : (
        <MoonIcon className="toggle-theme__icon" />
      )}
    </button>
  );
}
