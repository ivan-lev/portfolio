import React from 'react';

export const LanguageContext = React.createContext();

export const languages = {
  en: {
    name: 'en',
    menuHome: 'Home',
    menuAbout: 'About',
    menuContact: 'Contact',
    menuCredits: 'Credits',
    heroTextFirst: 'Hi 👋',
    heroTextSecond: 'My name is',
    heroName: 'Ivan Lev',
    heroTextThird: 'I build things for web',
    avatarAlt: 'My photo',
    techStack: 'My tech stack',
    technologies: 'Technologies I’ve been working with recently',
    projectsTitle: 'Projects',
    projectsSubtitle: 'Things I’ve built so far',
    footerText: 'Designed and built by Ivan Lev with Love & Chinese Fine Teas',
    aboutmeTitle: 'About me',
    aboutmeInfo:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste blanditiis, explicabo sapiente molestias et sint facilis officiis aperiam nihil nesciunt aut similique. Illum, tempore facere. Adipisci nesciunt nostrum repudiandae?',
    contactText: 'For any questions please mail me:',
    workExperience: 'Work experience',
    education: 'Education',
    creditsSite: 'This site was created using free template from ',
    creditsLogo: 'Logo was founded on',
    creditsTelegramLogo: 'Telegram icon from',
    creditsVitePlugin: 'Convenient work with svg files is carried out using this package:'
  },
  ru: {
    name: 'ru',
    menuHome: 'Домой',
    menuAbout: 'Обо мне',
    menuContact: 'Контакты',
    menuCredits: 'Благодарности',
    heroTextFirst: 'Привет 👋',
    heroTextSecond: 'Меня зовут',
    heroName: 'Иван Лев',
    heroTextThird: 'Я создаю вещи для веба',
    avatarAlt: 'Моя фотография',
    techStack: 'Мой стек технологий',
    technologies: 'Инструменты, которыми я обычно пользуюсь',
    projectsTitle: 'Проекты',
    projectsSubtitle: 'Вещи, которые я создал',
    footerText: 'Разработано Иваном Львом с любовью и чашечкой китайского чая',
    aboutmeTitle: 'Обо мне',
    aboutmeInfo:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iste blanditiis, explicabo sapiente molestias et sint facilis officiis aperiam nihil nesciunt aut similique. Illum, tempore facere. Adipisci nesciunt nostrum repudiandae?',
    contactText: 'Если у вас есть вопросы, пишите на этот адрес:',
    workExperience: 'Опыт работы',
    education: 'Образование',
    creditsSite: 'Сайт был создан на основе этого шаблона из',
    creditsLogo: 'Логотип был взят здесь:',
    creditsTelegramLogo: 'Иконка телеграма отсюда:',
    creditsVitePlugin: 'Удобная работа с svg файлами осуществлена посредством этого пакета:'
  }
};
