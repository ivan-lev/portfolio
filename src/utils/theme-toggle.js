export default function toggleTheme() {
  const elem = document.documentElement;
  const computedStyles = getComputedStyle(elem);
  const bgColor = computedStyles.getPropertyValue('--bg-color-primary');
  if (bgColor === '#faf0e6') {
    elem.style.setProperty('--bg-color-primary', 'var(--bg-dark-main)');
    elem.style.setProperty('--bg-color-secondary', 'var(--bg-dark-card');
    elem.style.setProperty('--color-hero', 'var(--color-dark-hero)');
    elem.style.setProperty('--color-primary', 'var(--color-dark-primary)');
    elem.style.setProperty('--color-secondary', 'var(--color-dark-secondary)');
    elem.style.setProperty('--color-additional', 'var(--color-dark-additional)');
    elem.style.setProperty('--color-icon', 'var(--color-dark-icon)');
  }
  if (bgColor === '#191919') {
    elem.style.setProperty('--bg-color-primary', 'var(--bg-beige-main)');
    elem.style.setProperty('--bg-color-secondary', 'var(--bg-beige-card');
    elem.style.setProperty('--color-hero', 'var(--color-beige-hero)');
    elem.style.setProperty('--color-primary', 'var(--color-beige-primary)');
    elem.style.setProperty('--color-secondary', 'var(--color-beige-secondary)');
    elem.style.setProperty('--color-additional', 'var(--color-beige-additional)');
    elem.style.setProperty('--color-icon', 'var(--color-beige-icon)');
  }
}
