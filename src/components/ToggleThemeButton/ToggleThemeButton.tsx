import './ToggleThemeButton.scss';

import type { ToggleTheme } from '../../types/ToggleTheme.ts';

import handleSetColorTheme from '../../utils/handleSetColorTheme.ts';

import SunIcon from '../../images/icon-theme-sun.svg?react';
import MoonIcon from '../../images/icon-theme-moon.svg?react';

export default function ToggleThemeButton({ theme, setTheme }: ToggleTheme) {
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
