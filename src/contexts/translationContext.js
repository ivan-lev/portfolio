import React from 'react';

export const TranslationContext = React.createContext();

export const TRANSLATION = {
  FOOTER: {
    TEXT: {
      ru: 'Разработано Иваном Львом с любовью и чашечкой китайского чая',
      en: 'Designed and built by Ivan Lev with Love & Cup of Fine Chinese Tea'
    }
  },
  MAIN: {
    TEXT_FIRST: { ru: 'Привет 👋 ,', en: 'Hi 👋,' },
    TEXT_SECOND: { ru: 'Меня зовут', en: 'My name is' },
    NAME: { ru: 'Иван Лев', en: 'Ivan Lev' },
    TEXT_THIRD: { ru: 'Я создаю вещи для веба', en: 'I build things for web' },
    AVATAR_ALT: { ru: 'Моя фотография', en: 'My photo' },
    TECH_STACK: { ru: 'Мой стек технологий', en: 'My tech stack' },
    TECHNOLOGIES: {
      ru: 'Инструменты, которыми я обычно пользуюсь',
      en: 'Technologies I`ve been working with recently'
    },
    PROJECTS_TITLE: { ru: 'Проекты', en: 'Projects' },
    PROJECTS_SUBTITLE: { ru: 'Вещи, которые я создал', en: 'Things I`ve built so far' }
  },
  PROJECT_CARD: {
    LINK: { ru: 'Проект', en: 'Live Preview' },
    GITHUB: { ru: 'Посмотреть код', en: 'View Code' }
  },
  MENU: {
    HOME: { ru: 'Домой', en: 'Home' },
    ABOUT: { ru: 'Обо мне', en: 'About' },
    USES: { ru: 'Инструменты', en: 'Uses' },
    CONTACT: { ru: 'Контакты', en: 'Contacts' },
    CREDITS: { ru: 'Благодарности', en: 'Credits' }
  },
  ABOUT_ME: {
    TITLE: { ru: 'Обо мне', en: 'About me' },
    INFO: {
      ru: 'Привет! Меня зовут Иван. Я веб-разработчик, увлечённый своим делом. Я интересуюсь свежими технологиями и стараюсь внедрить их в свою практику. Из личных интересов я увлекаюсь китайским чаем, японской культурой и практикую медитацию.',
      en: 'Hello! My name is Ivan. I am a web developer who is passionate about my work. I am interested in new technologies and try to introduce them into my practice. My personal interests include Chinese tea, Japanese culture, and practicing meditation.'
    },
    EXPERIENCE: { ru: 'Опыт работы', en: 'Work experience' },
    EDUCATION: { ru: 'Образование', en: 'Education' }
  },
  USES: {
    TITLE: {
      ru: 'Используемый софт. Любимые гаджеты. Полезные вещи.',
      en: 'Software I use. Gadgets I love. Things I recommend.'
    },
    SUBTITLE: {
      ru: 'Если вы спросите меня о том, что я использую для создания программ и поддержания продуктивности (или в надежде на то, что я буду продуктивным, но на самом деле просто прокрастинирую), то вот мой обширный список.',
      en: 'If you ask me about the things I use to create software and stay productive (or buy these things in the hopes that I`ll be productive but actually just procrastinate), here`s my extensive list.'
    },
    DESIGN: {
      ru: 'Дизайн',
      en: 'Design'
    },
    FRONTEND: { ru: 'Фронтенд', en: 'Frontend' },
    BACKEND: { ru: 'Бэкенд', en: 'Backend' },
    HARDWARE: { ru: 'Оборудование', en: 'Hardware' },
    HEALT_PROD: { ru: 'Здоровье и продуктивность', en: 'Health and Productivity' },
    FIGMA: {
      ru: 'Для вёрстки я использую Figma, так как это лучшее приложение в своей сфере. У меня есть минимальный опыт работы с макетами, созданными в Photoshop, но Figma де-факто стала стандартом в отрасли.',
      en: 'For layout I use Figma, as it is the best application in its field. I have minimal experience with mockups created in Photoshop, but Figma de facto has become industry standard.'
    },
    VSCODE: {
      ru: 'Изначально я писал код в Sublime Text, потом перешёл на Atom. Сейчас я остановился на VSCode. Хотя есть и другие, более продвинутые инструменты разработки, мне нравится его скорость и доступность. Можно создавать проекты на МакБуке 10-летней давности и VSCode не будет тормозить. Он очень хорош.',
      en: `Initially I wrote code in Sublime Text, then switched to Atom. Now I've settled on VSCode. Although there are other, more advanced development tools, I like its speed and accessibility. You can create projects on a 10-year-old MacBook and VSCode will not slow down. It is very good.`
    },
    REACT: {
      ru: 'Я пишу веб-приложения, используя React, так как это удобный инструмент с богатой экосистемой. Согласно опросу разработчиков на Stack Overflow, по состоянию на 2023 год, библиотека React - самая популярная среди большинства респондентов. Этот сайт создан также на React.',
      en: 'I write web applications using React because it is a user-friendly tool with a rich ecosystem. According to a developer survey on Stack Overflow, as of 2023, React is the most popular library among the majority of respondents. This site is also built in React.'
    },
    NODEJS: {
      ru: 'У меня есть базовые знания по созданию сервера на NodeJS с использованием библиотеки Express.js. Сервер на NodeJS позволяет работать как с файловой системой, так и с базами данных посредством встроенных инструментов и библиотек, расширяющих его функционал.',
      en: 'I have basic knowledge of creating a server in NodeJS using the Express.js library. A NodeJS server allows you to work with both the file system and databases using built-in tools and libraries that expand its functionality.'
    },
    MONGODB: {
      ru: 'Одна из популярнейших NoSQL баз данных, и самая распространённая среди используемых с Node.js. Данные хранятся в структурах, близких JSON и их просто обрабатывать из JavaScript, что очень удобно.',
      en: 'One of the most popular NoSQL databases, and the most common among those used with Node.js. The data is stored in structures similar to JSON and can be easily processed from JavaScript, which is very convenient.'
    },
    POSTMAN: {
      ru: 'Postman - удобная программа, которая позволяет отправлять на сервер запросы и проверять, как на них реагирует сервер. Это гибкий инструмент, с помощью которого можно быстро протестировать работу API.',
      en: 'Postman is a handy program that allows you to send requests to a server and check how the server responds to them. This is a flexible tool with which you can quickly test the operation of the API.'
    },
    MACBOOK: {
      ru: 'Обычно здесь пишут о своей крутой технике, но я перешёл с нового 15-дюймового Lenovo на 13-дюймовый MacBook Air 2013 года. Он оказался очень проворным, и спокойно выдерживает нагрузки.',
      en: 'Usually people write about their cool tech here, but I switched from a new 15-inch Lenovo to a 13-inch 2013 MacBook Air. He turned out to be very agile and can easily withstand loads.'
    },
    JABRA: {
      ru: 'Для фиксации внимания на рабочем процессе в новых или шумных местах - это отличный гаджет с пассивным шумоподавлением. А при необходимости, можно подавить шум и активно, включив музыку :)',
      en: 'For focusing on work in new or noisy places, this is an excellent gadget with passive noise reduction. And if necessary, you can suppress noise actively by turning on music :)'
    },
    INSIGHT_TIMER: {
      ru: 'Я пользуюсь этой программой для медитации и практик. Она ежедневно напоминает мне о том, что нужно оценить своё состояние и уделить время для практикe. Поддерживать баланс - это залог продуктивности.',
      en: 'I use this program for meditation and practice. It reminds me every day to evaluate my condition and take time to practice. Maintaining balance is the key to productivity.'
    }
  },
  CONTACT: {
    TEXT: {
      ru: 'Если у вас есть вопросы, пишите на этот адрес: ',
      en: 'For any questions please mail me:'
    }
  },
  CREDITS: {
    TITLE: { ru: 'Благодарности', en: 'Credits' },
    SUBTITLE: {
      ru: 'На этой странице я хочу упомянуть все ресурсы, которые так или иначе помогли мне создать мой сайт',
      en: 'On this page I want to mention all the resources that in one way or another helped me create my website'
    },
    WIFE: {
      ru: 'В первую очередь я хочу поблагодарить Ксению, мою жену, за то, что верит в меня. Её поддержка придаёт мне громадные силы продолжать развиваться!',
      en: 'First of all, I want to thank Ksenia, my wife, for believing in me. Her support gives me enormous strength to continue to develop!'
    },
    SITE: {
      ru: 'Сайт был создан на основе бесплатного шаблона. Он был значительно переработан, добавлена отзывчивость, убраны лишние элементы, но костяк был взят отсюда: ',
      en: 'The site was created based on a free template. It was heavily redesigned, responsiveness was added, unnecessary elements were removed, but the core was taken from here: '
    },
    LOGO: { ru: 'Неплохой логотип был найден мною здесь: ', en: 'I found a good logo on ' },
    ICONS: {
      ru: 'Все иконки в формате svg я взял с сайта ',
      en: 'I took all the icons in svg format from '
    },
    SVG_PLUGIN: {
      ru: 'Работа с svg файлами осуществлена посредством пакета ',
      en: 'Convenient work with svg files is carried out using this package: '
    },
    THEME_CHANGE_ICONS: {
      ru: 'Иконки солнца и луны были взяты из коллекции ',
      en: 'Nice sun and moon icons were founded here: '
    },
    CSS_PROPS_ARTICLE: {
      ru: 'Отличная статья о кастомных CSS-свойствах, которая поможет вам удобно менять темы на сайте: ',
      en: 'An excellent article about custom CSS properties that will help you conveniently change themes on your site: '
    },
    MESH_SPIN: {
      ru: 'Красивая вращающаяся штуковина была найдена на здесь: ',
      en: 'The beautiful rotating thing was found here:'
    }
  }
};
