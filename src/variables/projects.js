import howToLearn from '../assets/images/project-previews/how-to-learn.jpg';
import russianTravel from '../assets/images/project-previews/russian-travel.jpg';
import mesto from '../assets/images/project-previews/mesto.jpg';
import portfolio from '../assets/images/project-previews/portfolio.jpg';

export const projects = [
  {
    id: 1,
    preview: portfolio,
    title: 'Сайт-портфолио',
    description:
      'Этот сайт - одностраничное приложение, созданное на React и собранное при помощи Vite. Сайт использует локальное хранилище для сохранения настроек языка и цветовой темы, а также контекст для изменения данных',
    stack: 'HTML, SCSS, JavaScript, React, Git',
    link: '#',
    ghLink: 'https://github.com/ivan-lev/portfolio'
  },
  {
    id: 2,
    preview: mesto,
    title: 'Mesto',
    description:
      'Проект о путешественниках. В проекте используется библиотека React, веб-приложение делает api-запросы на сервер и получает информацию о пользователе и карточках.',
    stack: 'HTML, CSS, JavaScript, React, Git',
    link: 'https://ivan-lev.github.io/mesto-react/',
    ghLink: 'https://github.com/ivan-lev/mesto-react/'
  },
  {
    id: 3,
    preview: russianTravel,
    title: 'Путешествие по России',
    description: 'Проект о путшествиях по России. Адаптивная вёрстка, применениее flexbox и grid.',
    stack: 'HTML, СSS, Git',
    link: 'https://ivan-lev.github.io/russian-travel/',
    ghLink: 'https://github.com/ivan-lev/russian-travel/'
  },
  {
    id: 4,
    preview: howToLearn,
    title: 'Научиться учиться',
    description: 'Простой проект с адаптивной вёрсткой и анимацией.',
    stack: 'HTML, CSS, BEM, Git',
    link: 'https://ivan-lev.github.io/how-to-learn/',
    ghLink: 'https://github.com/ivan-lev/how-to-learn/'
  }
];
