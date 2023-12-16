export default function handleSetColorTheme(theme) {
  const elem = document.documentElement;

  elem.style.setProperty('--bg-color-main', `var(--bg-${theme}-main)`);
  elem.style.setProperty('--bg-color-card', `var(--bg-${theme}-card)`);
  elem.style.setProperty('--color-hero', `var(--color-${theme}-hero)`);
  elem.style.setProperty('--color-primary', `var(--color-${theme}-primary)`);
  elem.style.setProperty('--color-secondary', `var(--color-${theme}-secondary)`);
  elem.style.setProperty('--color-additional', `var(--color-${theme}-additional)`);
  elem.style.setProperty('--color-icon', `var(--color-${theme}-icon)`);
  elem.style.setProperty('--color-icon-hover', `var(--color-${theme}-additional)`);
}
