import React from 'react';
import './ToggleThemeButton.scss';

import SunIcon from '../../images/icon-theme-sun.svg?react';
import MoonIcon from '../../images/icon-theme-moon.svg?react';

export default function ToggleThemeButton({ theme, setTheme }) {
  function toggleTheme() {
    let newTheme = '';
    const elem = document.documentElement;
    // const computedStyles = getComputedStyle(elem);
    // const bgColor = computedStyles.getPropertyValue('--bg-color-primary');

    theme === 'dark' ? (newTheme = 'beige') : (newTheme = 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    elem.style.setProperty('--bg-color-primary', `var(--bg-${newTheme}-main)`);
    elem.style.setProperty('--bg-color-secondary', `var(--bg-${newTheme}-card`);
    elem.style.setProperty('--color-hero', `var(--color-${newTheme}-hero)`);
    elem.style.setProperty('--color-primary', `var(--color-${newTheme}-primary)`);
    elem.style.setProperty('--color-secondary', `var(--color-${newTheme}-secondary)`);
    elem.style.setProperty('--color-additional', `var(--color-${newTheme}-additional)`);
    elem.style.setProperty('--color-icon', `var(--color-${newTheme}-icon)`);
    elem.style.setProperty('--color-icon-hover', `var(--color-${newTheme}-additional)`);
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
