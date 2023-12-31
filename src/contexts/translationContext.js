import React from 'react';

export const TranslationContext = React.createContext();

export const translations = {
  en: {
    name: 'en',
    menuHome: 'Home',
    menuAbout: 'About',
    menuUses: 'Uses',
    menuContact: 'Contact',
    menuCredits: 'Credits',
    heroTextFirst: 'Hi 👋,',
    heroTextSecond: 'My name is',
    heroName: 'Ivan Lev',
    heroTextThird: 'I build things for web',
    avatarAlt: 'My photo',
    techStack: 'My tech stack',
    technologies: 'Technologies I’ve been working with recently',
    projectsTitle: 'Projects',
    projectsSubtitle: 'Things I’ve built so far',
    projectCardPreviewLinkText: 'Live Preview',
    projectCardGithubLinkText: 'View Code',
    footerText: 'Designed and built by Ivan Lev with Love & Cup of Fine Chinese Tea',
    aboutmeTitle: 'About me',
    aboutmeInfo:
      'Hello! My name is Ivan. I am a web developer who is passionate about my work. I am interested in new technologies and try to introduce them into my practice. My personal interests include Chinese tea, Japanese culture, and practicing meditation.',
    usesTitle: 'Software I use. Gadgets I love. Things I recommend.',
    usesSubtitle:
      "If you ask me about the things I use to create software and stay productive (or buy these things in the hopes that I'll be productive but actually just procrastinate), here's my extensive list.",
    contactText: 'For any questions please mail me:',
    workExperience: 'Work experience',
    education: 'Education',
    creditsTitle: 'Credits',
    creditsSubtitle:
      'On this page I want to mention all the resources that in one way or another helped me create my website',
    creditsSite:
      'The site was created based on a free template. It was heavily redesigned, responsiveness was added, unnecessary elements were removed, but the core was taken from here: ',
    creditsLogo: 'I found a good logo on ',
    creditsIcons: 'I took all the icons in svg format from ',
    creditsVitePlugin: 'Convenient work with svg files is carried out using this package: ',
    creditsSunMoonIcons: 'Nice sun and moon icons were founded here: ',
    creditsCssCustomProps:
      'An excellent article about custom CSS properties that will help you conveniently change themes on your site: '
  },
  ru: {
    name: 'ru',
    menuHome: 'Домой',
    menuAbout: 'Обо мне',
    menuUses: 'Инструменты',
    menuContact: 'Контакты',
    menuCredits: 'Благодарности',
    heroTextFirst: 'Привет 👋 ,',
    heroTextSecond: 'Меня зовут',
    heroName: 'Иван Лев',
    heroTextThird: 'Я создаю вещи для веба',
    avatarAlt: 'Моя фотография',
    techStack: 'Мой стек технологий',
    technologies: 'Инструменты, которыми я обычно пользуюсь',
    projectsTitle: 'Проекты',
    projectsSubtitle: 'Вещи, которые я создал',
    projectCardPreviewLinkText: 'Проект',
    projectCardGithubLinkText: 'Посмотреть код',
    footerText: 'Разработано Иваном Львом с любовью и чашечкой китайского чая',
    aboutmeTitle: 'Обо мне',
    aboutmeInfo:
      'Привет! Меня зовут Иван. Я веб-разработчик, увлечённый своим делом. Я интересуюсь свежими технологиями и стараюсь внедрить их в свою практику. Из личных интересов я увлекаюсь китайским чаем, японской культурой и практикую медитацию.',
    usesTitle: 'Софт, что я использую. Гаджеты, которые люблю. Вещи, которые рекомендую.',
    usesSubtitle:
      'Если вы спросите меня о том, что я использую для создания программ и поддержания продуктивности (или в надежде на то, что я буду продуктивным, но на самом деле просто прокрастинирую), то вот мой обширный список.',
    contactText: 'Если у вас есть вопросы, пишите на этот адрес: ',
    workExperience: 'Опыт работы',
    education: 'Образование',
    creditsTitle: 'Благодарности',
    creditsSubtitle:
      'На этой странице я хочу упомянуть все ресурсы, которые так или иначе помогли мне создать мой сайт',
    creditsSite:
      'Сайт был создан на основе бесплатного шаблона. Он был значительно переработан, добавлена отзывчивость, убраны лишние элементы, но костяк был взят отсюда: ',
    creditsLogo: 'Неплохой логотип был найден мною здесь: ',
    creditsTelegramLogo: 'Все иконки в формате svg я взял с сайта ',
    creditsVitePlugin: 'Работа с svg файлами осуществлена посредством пакета ',
    creditsSunMoonIcons: 'Иконки солнца и луны были взяты из коллекции ',
    creditsCssCustomProps:
      'Отличная статья о кастомных CSS-свойствах, которая поможет вам удобно менять темы на сайте: '
  }
};
